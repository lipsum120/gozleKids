interface Size {
  size: "sm" | "md" | "lg";
}

export const ChannelImg = ({ size }: Size) => {
  const imgSize = { sm: "w-10 h-10", md: "w-12 h-12", lg: "w-20 h-20" };
  return (
    <figure
      className={`flex-none ${imgSize[size]} bg-gray-300 rounded-full`}
    ></figure>
  );
};
