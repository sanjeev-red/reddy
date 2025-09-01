document.getElementById("issueForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const issueType = document.getElementById("issueType").value;
  const description = document.getElementById("description").value;

  if (!issueType || !description) {
    alert("Please fill all fields");
    return;
  }

  // Create issue object
  const issue = {
    type: issueType,
    description: description,
    status: "Pending"
  };

  // Save in localStorage (demo purpose)
  let issues = JSON.parse(localStorage.getItem("issues")) || [];
  issues.push(issue);
  localStorage.setItem("issues", JSON.stringify(issues));

  document.getElementById("statusMsg").innerText =
    "✅ Report submitted! Sent to concerned department.";

  document.getElementById("issueForm").reset();
});
