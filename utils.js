export const normalizeSafeFileName = (fileName) => fileName.replace(/^-/, "");

export function joinPath(root, ...paths) {
  return [root.replace(/\/$/, ""), ...paths].join("/");
}

export const fileSizeOk = (file) => file.size < 1024;

export const handleClick = (refForFileInput) => {
  refForFileInput.current.click();
};

export const validateContainerName = (nameToValidate) => {
  if (!nameToValidate || nameToValidate.trim() === "") {
    return {
      validated: false,
      validationError:
        "Please enter a valid container name. Container names must have a name and end with trailing slash ('/').",
    };
  }

  if (nameToValidate.endsWith("/")) {
    return { validated: true, value: nameToValidate.trim() };
  }
  return { validated: true, value: `${nameToValidate.trim()}/` };
};

export const downloadFile = (file, fileName) => {
  try {
    const url = window.URL.createObjectURL(file);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (e) {
    console.log(e);
  }
};
