import React, { useState } from "react";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
const Projects = () => {
  // State variables for form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    image: null, // File input requires null or a File object
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.image) {
        alert("Please select an image.");
        return;
      }

      const storageRef = ref(storage, `gallery/${formData.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, formData.image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //   console.log(snapshot);
        },
        (error) => {
          console.log(error);
          alert("Error Uploading Image");
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            // setFormData({
            //   title: "",
            //   description: "",
            //   link: "",
            //   image: null,
            // });
            console.log("here");
            const dataToSend = { ...formData, image: downloadURL };
            await addDoc(collection(db, "projects"), dataToSend);
            alert("Sucessfull Uploaded");

            // console.log(res);
            setFormData({
              title: "",
              description: "",
              link: "",
              image: null,
            });
          } catch (error) {
            console.error(error);
            alert("Error Getting Download URL");
          }
        }
      );
    } catch (error) {
      console.error(error);
      alert("Error Uploading Image");
    }
  };

  return (
    <div className="bg-gray-950 drop-shadow-md text-white p-8 w-full ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-xl font-semibold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full focus:outline-dotted py-2 px-4 mt-1 rounded-md bg-gray-800 text-white"
            placeholder="Enter title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-xl font-semibold">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full focus:outline-dotted py-2 px-4 mt-1 rounded-md bg-gray-800 text-white"
            placeholder="Enter description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="link" className="block text-xl font-semibold">
            Link:
          </label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            className="w-full focus:outline-dotted py-2 px-4 mt-1 rounded-md bg-gray-800 text-white"
            placeholder="Enter link"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-xl font-semibold">
            Image:
          </label>
          <input
            type="file"
            // id="image"
            name="image"
            onChange={handleInputChange}
            accept="image/*"
            className="w-full focus:outline-dotted py-2 px-4 mt-1 rounded-md bg-gray-800 text-white"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#6A64F1] text-white py-2 px-12 mt-4 rounded-md hover:bg-[#524ACA] focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Projects;
