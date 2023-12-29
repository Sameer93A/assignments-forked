function updateTime() {
  const now = new Date();

  // Format time in HH:MM::SS (24-hour format)
  const hours24 = now.getHours().toString().padStart(2, "0");
  const minutes24 = now.getMinutes().toString().padStart(2, "0");
  const seconds24 = now.getSeconds().toString().padStart(2, "0");

  console.log(`${hours24}:${minutes24}:${seconds24}`);

  // Format time in HH:MM::SS AM/PM (12-hour format)
  const hours12 = (((now.getHours() + 11) % 12) + 1)
    .toString()
    .padStart(2, "0");
  const minutes12 = now.getMinutes().toString().padStart(2, "0");
  const seconds12 = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  console.log(`${hours12}:${minutes12}:${seconds12}:${ampm}`);
}

updateTime();

setInterval(updateTime, 1000);
