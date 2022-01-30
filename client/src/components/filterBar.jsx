export const FilterNav = ({ eventChange }) => {
  return (
    <>
      <select onChange={(e) => eventChange(e.target.value)}>
        <option value={"holidays"}>select</option>
        <option value={"israel"}>Judaism</option>
        <option value={"islam"}>Muslim</option>
        <option value={"christian"}>Christian</option>
      </select>
    </>
  );
};
