import { Skeleton } from "@mui/material";

export default function LoadingItemComp() {
  return (
    <ul className="lic-ul">
      {Array.from({ length: 6 }).map((_, j) => {
        return (
          <li key={`${j}-${j}`} className="lic-ul-li">
            <Skeleton
              width={240}
              height={150}
              variant="rectangular"
              className="lic-ul-li-skeleton"
            />
          </li>
        );
      })}
    </ul>
  );
}
