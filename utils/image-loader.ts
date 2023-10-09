interface ImageLoaderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function imageLoader(props: ImageLoaderProps) {
  return `/todos-zustand/${props.src}`;
}
