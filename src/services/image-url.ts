import noImage from '../assets/no_image.jpg'

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  return `${process.env.NEXT_PUBLIC_URL_IMG}/${url}`
}
export default getCroppedImageUrl