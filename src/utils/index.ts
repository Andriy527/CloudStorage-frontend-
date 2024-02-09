export const validateEmail = (rule: unknown, value: string, callback: (error?: string) => void) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
        callback('Please enter a valid email address');
    } else {
        callback();
    }
}

export const isImage = (mimeType: string): boolean => {
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp'];

    return allowedImageTypes.includes(mimeType);
}