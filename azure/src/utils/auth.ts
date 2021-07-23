
export function getUserId(req: any) {
    if (!req.user) {
        return null;
    }

    return (req.user as any).id;
}