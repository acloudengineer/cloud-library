getContent = document.getElementById('content')

function pageGrab(id) {
  getContent.innerHTML = "<%- include('includes/pages/operating-systems/${id}') %>"

}