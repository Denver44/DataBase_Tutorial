// This is Update Function

const doUpdate = async (_id) => {
  try {
    const result = await Tutorial.updateOne(
      { _id },
      {
        $set: {
          name: "Denver Full stack Developer",
        },
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doUpdate("5fb26d517ef19b0d5cec07e7");
// 1.It take a object_id and update the element
// 2. we have to use $set for updating
// 3. here we have done _id destructing.

// findByIDAndUpdate

// this update and show the new one here only.

const doUpdate = async (_id) => {
  try {
    const result = await Tutorial.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: "Durgesh Devops Engineer",
        },
      },
      {
        new: true, // this help us to show the new changes
        useFindAndModify: false, // this is mandatory.
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doUpdate("5fb26d517ef19b0d5cec07e7");
