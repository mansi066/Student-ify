document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const aboutDiv = document.querySelector(".about");
    
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      const content = aboutDiv.innerHTML;
    
      // Remove existing highlights
      const cleanedContent = content.replace(/<span class="highlight">([^<]*)<\/span>/g, "$1");
    
      if (query === "") {
        aboutDiv.innerHTML = cleanedContent;
        return;
      }
    
      // Highlight matched words
      const regex = new RegExp(`(${query})`, "gi");
      const highlightedContent = cleanedContent.replace(regex, `<span class="highlight">$1</span>`);
    
      aboutDiv.innerHTML = highlightedContent;
    });
    
});


