const pkgJson = require("./package.json");

module.exports = (grunt) => {
    const getConfig = () => {
        return {
            copy: {
                main: {
                    files: [
                        {
                            cwd: "src",
                            src: "**",
                            dest: "build",
                            expand: true
                        },
                        {
                            cwd: "nssm",
                            src: "**",
                            dest: "build",
                            expand: true
                        },
                        {
                            cwd: "",
                            src: ["package.json", "README.md", "CHANGELOG.md", "*.bat"],
                            dest: "build",
                            expand: true
                        }
                    ]
                }
            },
            clean: ["build", "dist"],
            compress: {
                main: {
                    options: {
                        archive: `dist/build_v${pkgJson.version}.zip`
                    },
                    files: [{
                        expand: true,
                        cwd: "build/",
                        src: ["**"],
                        dest: "/"
                    }]
                }
            },
            secret: grunt.file.readJSON("secret.json"),
            environments: {}
        };
    };

    const setDeployEnvironments = (config) => {
        const _config = Object.assign({}, config);
        const secret = _config.secret;
        const secretKeys = Object.keys(secret);
        const deployEnvironments = {
            options: {
                local_path: "dist",
                current_symlink: "current",
                readyTimeout: 40000
            }
        };
        secretKeys.forEach((sk) => {
            deployEnvironments[sk] = {
                options: {
                    host: `<%= secret.${sk}.host %>`,
                    username: `<%= secret.${sk}.username %>`,
                    password: `<%= secret.${sk}.password %>`,
                    deploy_path: "/home/eric/applications/condomilson/releases",
                    releases_to_keep: "10",
                    after_deploy: `cd /home/eric/applications/condomilson/releases/current && unzip build_v${pkgJson.version}.zip && rm build_v${pkgJson.version}.zip && pm2 reload condomilson`,
                    debug: true
                }
            };
        });
        _config.environments = deployEnvironments;
        return _config;
    };

    grunt.initConfig(setDeployEnvironments(getConfig()));

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-compress");
    //grunt.loadNpmTasks("grunt-ssh-deploy");

    const registerGruntDynamicTasks = (grunt, config) => {
        const _config = Object.assign({}, config);
        const secret = _config.secret;
        const secretKeys = Object.keys(secret);
        secretKeys.forEach((sk) => {
            //grunt.registerTask(`deploy-${sk}`, [`ssh_deploy:${sk}`]);
            //grunt.registerTask(`rollback-${sk}`, [`ssh_rollback:${sk}`]);
            grunt.registerTask(`deploy-${sk}`, [`deploy:${sk}`]);
        });
    }

    const registerGruntTasks = (grunt, config) => {
        registerGruntDynamicTasks(grunt, config);
        grunt.registerTask("build", ["clean", "copy", "npm-install", "npm-audit-fix", "compress:main"]);

        grunt.registerTask("npm-install", "install the backend dependencies only", function () {
            var exec = require("child_process").exec;
            var cb = this.async();
            exec("npm install --only=production", { cwd: "./build" }, function (err, stdout, stderr) { // eslint-disable-line no-unused-vars
                cb(err);
            });
        });
    
        grunt.registerTask("npm-audit-fix", "apply npm audit fix", function () {
            var exec = require("child_process").exec;
            var cb = this.async();
            exec("npm audit fix", { cwd: "./build" }, function (err, stdout, stderr) { // eslint-disable-line no-unused-vars
                cb(err);
            });
        });
    };

    registerGruntTasks(grunt, getConfig());
};
