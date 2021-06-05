const Images = ({ layouts, ...props }) => {
  return (
    <layouts.base {...props.config.views}>
      <div>Hello</div>
      <Image src="https://picsum.photos/640/480" />
    </layouts.base>
  );
}
  
export default Images;