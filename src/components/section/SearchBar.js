import React, { useEffect } from "react";
import { useState } from "react";
import "../css/Search.css";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const products = [
    {
      _id: "1",
      name: "Cate",
      price: "999",
      image: " https://i.imgur.com/CzXTtJV.jpg",
    },
    {
      _id: "2",
      name: "Flower",
      // count: 1,
      // colors: ["orange", "black", "crimson", "teal"],
      price: "99",
      image:
        "https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpg",
    },
    {
      _id: "3",
      name: "Apple",
      // count: 1,
      // colors: ["orange", "black", "crimson", "teal"],
      price: "90",
      image:
        "https://farm8.staticflickr.com/7377/9359257263_81b080a039_z_d.jpg",
    },
    {
      _id: "4",
      name: " Boat",
      // count: 1,
      // colors: ["orange", "black", "crimson", "teal"],
      price: "990",
      image:
        "https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg",
    },
    {
      _id: "5",
      name: "Mushroom",
      // colors: ["orange", "black", "crimson", "teal"],
      // count: 1,
      price: "90",
      image:
        "https://farm2.staticflickr.com/1449/24800673529_64272a66ec_z_d.jpg",
    },
    {
      _id: "6",
      name: "bicycle",
      // colors: ["orange", "black", "crimson", "teal"],
      price: "5000",
      image: " https://farm3.staticflickr.com/2378/2178054924_423324aac8.jpg",
    },
    {
      _id: "7",
      name: "Coffee",
      // colors: ["orange", "black", "crimson", "teal"],
      // count: 1,
      price: "600",
      image:
        "https://farm4.staticflickr.com/3752/9684880330_9b4698f7cb_z_d.jpg",
    },
    {
      _id: "8",
      name: "Bus",
      // count: 1,
      // colors: ["orange", "black", "crimson", "teal"],
      price: "99999",
      image: "https://farm4.staticflickr.com/3319/3211138044_9232086442.jpg",
    },
    {
      _id: "9",
      name: "bicycle",
      // count: 1,
      price: "9999",
      // colors: ["orange", "black", "crimson", "teal"],
      image: " https://farm3.staticflickr.com/2378/2178054924_423324aac8.jpg",
    },
    {
      _id: "10",
      name: "Lighthouse",
      price: "19999",
      // count: 1,
      // colors: ["orange", "black", "crimson", "teal"],
      image:
        "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
    },
    {
      _id: "11",
      name: "Cello",
      // count: 1,
      // colors: ["orange", "black", "crimson", "teal"],
      price: "9",
      image:
        "https://farm2.staticflickr.com/1090/4595137268_0e3f2b9aa7_z_d.jpg",
    },
    {
      _id: "12",
      name: "Whale",
      // count: 1,
      // colors: ["orange", "black", "crimson", "teal"],
      price: "99999",
      image:
        "https://farm9.staticflickr.com/8505/8441256181_4e98d8bff5_z_d.jpg",
    },
  ];
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setSearchResults(
      products.filter((o) => {
        return o.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  if (searchInput.length > 0) {
    products.filter((product) => {
      return product._id.match(searchInput);
    });
  }

  useEffect(() => {
    setSearchResults(
      products.filter((o) => {
        return o.name.toLowerCase().includes(props.searchInput.toLowerCase());
      })
    );
  }, [props.searchInput]);

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      /> */}

      <table>
        <thead>
          <tr>
            <th>ID </th>
            <th>Name </th>
            <th>Price </th>
            <th>Image </th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((items, index) => {
            return (
              <React.Fragment>
                <tr>
                  <td className="body">{items._id}</td>
                  <td className="body">{items.name}</td>
                  <td className="body">{items.price}</td>
                  <td>
                    <img style={{ width: "200px" }} src={items.image} />
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
