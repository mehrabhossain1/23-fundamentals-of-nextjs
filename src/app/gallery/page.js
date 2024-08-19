import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1>This is GalleryPage component</h1>

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
        alt="image"
        width={220}
        height={220}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
