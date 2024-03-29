const maleNames = [
  "John",
  "Michael",
  "William",
  "David",
  "James",
  "Joseph",
  "Daniel",
  "Matthew",
  "Robert",
  "Joshua",
  "Christopher",
  "Andrew",
  "Ethan",
  "Anthony",
  "Thomas",
  "Ryan",
  "Nicholas",
  "Jacob",
  "Alexander",
  "Kyle",
  "Kevin",
  "Brian",
  "Eric",
  "Jonathan",
  "Brandon",
  "Aaron",
  "Jason",
  "Adam",
  "Jack",
  "Gary",
  "Jacob",
  "Noah",
  "Liam",
  "William",
  "Mason",
  "James",
  "Benjamin",
  "Jacob",
  "Michael",
  "Elijah",
  "Ethan",
  "Alexander",
  "Oliver",
  "Daniel",
  "Lucas",
  "Matthew",
  "Aiden",
  "Jackson",
  "Logan",
  "David",
  "Joseph",
  "Samuel",
  "Henry",
  "Owen",
  "Sebastian",
  "Gabriel",
  "Carter",
  "Jayden",
  "John",
  "Luke",
  "Anthony",
  "Isaac",
  "Dylan",
  "Wyatt",
  "Andrew",
  "Joshua",
  "Christopher",
  "Grayson",
  "Jack",
  "Julian",
  "Ryan",
  "Jaxon",
  "Levi",
  "Nathan",
  "Caleb",
  "Hunter",
  "Christian",
  "Isaiah",
  "Thomas",
  "Aaron",
  "Lincoln",
  "Charles",
  "Eli",
  "Landon",
  "Connor",
  "Josiah",
  "Jonathan",
  "Cameron",
  "Jeremiah",
  "Mateo",
  "Adrian",
  "Hudson",
  "Robert",
  "Nicholas",
  "Brayden",
  "Nolan",
  "Easton",
  "Jordan",
  "Colton",
];

const randomMaleName = () => {
  /**
   * @description Get a random male name
   * @return {string}
   */
  return maleNames[Math.floor(Math.random() * maleNames.length)];
};

module.exports = randomMaleName;
