import Image from "next/image";

interface Props {
  lng: number;
  lat: number;
  zoom?: number;
  alt?: string;
}

const STYLE = "mapbox/light-v11";
const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

export default function MapboxMap({ lng, lat, zoom = 14, alt = "Carte" }: Props) {
  const pin = `pin-s+000000(${lng},${lat})`;
  const src = `https://api.mapbox.com/styles/v1/${STYLE}/static/${pin}/${lng},${lat},${zoom},0/800x450?access_token=${TOKEN}`;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      loading="lazy"
      sizes="(max-width: 1023px) 100vw, 50vw"
      className="object-cover"
    />
  );
}
