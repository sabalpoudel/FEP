import { Typography } from "@mui/material";

const Data = [
  { name: "Arduino pack" },
  { name: "Micro bit" },
  { name: "Trus pack" },
];
export default function SalesItemComp() {
  return (
    <ul className="sic-ul">
      {[...Data, ...Data, ...Data, ...Data].map((item, j) => {
        const imageIndex = (j % 6) + 1;

        return (
          <li key={`${item.name}-${j}`} className="sic-ul-li">
            <div className="sic-ul-li-img">
              <img
                alt={`${item.name}-${j + 1}`}
                src={`/assets/images/data/sale-${imageIndex}.webp`}
              />
            </div>
            <Typography fontWeight={700} className="sic-ul-li-name">
              {item.name}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
}
