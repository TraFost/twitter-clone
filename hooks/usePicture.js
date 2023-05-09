import pb from "@/lib/pocketbase";

const usePicture = (data) => {
  if (!data || data.length === 0) return null;

  if (data.length > 1) {
    const getLinkImage = data.map((item) => {
      const linkImage = pb.getFileUrl(item, item?.avatar);
      return linkImage;
    });
    return getLinkImage;
  } else {
    const singleData = data[0];
    const getLinkImage = pb.getFileUrl(singleData, singleData?.avatar);
    return getLinkImage;
  }
};

export default usePicture;
