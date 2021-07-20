import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { setImgs } from "../store/catSlice";
import axios from "axios";

async function getImages() {
  const data = await axios.get("https://api.thecatapi.com/v1/breeds");

  return data;
}

export default function Cat() {
  const { imgUrls } = useSelector((state: RootState) => state.cat);
  const dispatch = useDispatch();
  const { isLoading } = useQuery("imges", getImages, {
    onSuccess: (response) => {
      const mapedData = response.data
        .map((info: { image: { url: any } }) => {
          if (info.image) {
            return info.image.url;
          }
        })
        .filter((data: any) => !!data);

      dispatch(setImgs(mapedData));
    },
  });
  console.log(isLoading);
  return (
    <div>
      {!isLoading &&
        imgUrls.map((img, index) => (
          <img
            style={{ width: "100px", height: "100px" }}
            src={img}
            key={index}
            alt="img"
          />
        ))}
    </div>
  );
}
