import { Controller } from "react-hook-form";

function FileUpload({

  name,
  control

}) {

  return (

    <Controller

      name={name}

      control={control}

      rules={{
        required: "File is required"
      }}

      render={({ field: { onChange }, fieldState: { error } }) => (

        <>

          <input

            type="file"

            onChange={(e) => onChange(e.target.files[0])}

          />

          {error && (

            <p

              style={{
                color: "red",
                margin: "5px 0 0 0",
                fontSize: "14px"
              }}

            >

              {error.message}

            </p>

          )}

        </>

      )}

    />

  );

}

export default FileUpload;