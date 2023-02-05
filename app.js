const endpoint = `https://api.github.com/users/koushikjoshi/repos`;

const getRepos = (repos) => {
  const newRepos = repos
    .sort(
      (a, b) => Number(new Date(b.updated_at)) - Number(new Date(a.updated_at))
    )
    .slice(0, 2);

  const [
    {
      name: firstRepoName,
      html_url: firstRepoURL,
      description: firstRepoDescription,
    },
    {
      name: secondRepoName,
      html_url: secondRepoURL,
      description: secondRepoDescription,
    },
  ] = newRepos;

  document.querySelector(".repos").innerHTML = `
   
   <a class = "repoLink" target="_blank" rel="noopener noreferrer" href="${"https://github.com/koushikjoshi/LessonistApp"}">"${"Lessonist"}"</a>
   (${"An app that lets you get certified for completing curated courses from YouTube"}) and 
   <a class = "repoLink" target="_blank" rel="noopener noreferrer" href="${firstRepoURL}">"${firstRepoName}"</a>
   ${firstRepoDescription || ""}

   `;
};

const fetchData = () => {
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => getRepos(data));
};

fetchData();
