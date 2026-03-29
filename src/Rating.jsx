import { useState } from "react";
import { DgaRating } from "platformscode-new-react";

export default function Rating() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (val) => {
    setRating(val);
  };

return (
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <h2> Please rate my portfolio </h2>

  
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DgaRating
        value={rating}
        max={5}
        onChange={handleRatingChange}
        size="md"
        readOnly={false}
      />
    </div>

    <p> ypur ratig: {rating}</p>
  </div>
);
}