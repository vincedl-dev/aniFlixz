// SimpleForm.js
import React, { useState } from "react";
import { createPost } from "../../../services/api/mutation";

const SimpleForm = () => {
  return (
    <>
      <div class="md:columns-3 sm:columns-2 ">
        <p className="bg-red-500">1</p>
        <p className="bg-pink-500">2</p>
        <p className="bg-gray-500">3</p>
        <p className="bg-green-500">4</p>
        <p className="bg-blue-500">5</p>
      </div>
    </>
  );
};

export default SimpleForm;
