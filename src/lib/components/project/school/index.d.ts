export type FileStructure = {
    type: 'folder' | 'file';
    name: string;
    files?: FileStructure[];
};