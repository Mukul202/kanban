import {ID,storage} from '@/appwrite';

const uploadImage=async (file:File) => {
    if(!file) return ;
    const fileUploaded=await storage.createFile(
        "64c23227de49a6557dd5",
        ID.unique(),
        file
    )
    return fileUploaded;
}

export default uploadImage;