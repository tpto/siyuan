export const escapeHtml = (html: string) => {
    if (!html) {
        return html;
    }
    return html.replace(/&/g, "&amp;").replace(/</g, "&lt;");
};

export const escapeGreat = (html: string) => {
    return html.replace(/</g, "&lt;");
};

export const escapeAttr = (html: string) => {
    if (!html) {
        return html;
    }
    return html.replace(/"/g, "&quot;").replace(/'/g, "&apos;");
};

export const escapeAriaLabel = (html: string) => {
    if (!html) {
        return html;
    }
    return html.replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        .replace(/</g, "&amp;lt;").replace(/&lt;/g, "&amp;lt;");
};
