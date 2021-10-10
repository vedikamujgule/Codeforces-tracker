// async function getUser() {
//   try {
//     const response = await axios.get(
//       " https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan"
//     );
//     console.log("response", response);
//   } catch (error) {
//     console.error(error);
//   }
// }

const response = axios.get(
  " https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan"
);
console.log("response", response);
