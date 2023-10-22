interface Cars {
  manufacturer: string;
  makeYear: number;
  sportscar: boolean;
  model: string;
  sold: boolean;
}

const Cars = (cars: Cars) => {
  return (
    <div>
      The car is:
      {`${cars.manufacturer} ${cars.model} ${cars.makeYear} ${cars.sportscar} ${cars.sold}`}
    </div>
  );
};

export default Cars;
