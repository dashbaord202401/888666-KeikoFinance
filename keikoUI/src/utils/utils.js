export function showDivSidebar(targetDivId) {
    // Hide all contentDivs
    const contentDivs = document.querySelectorAll('.contentDiv');
    contentDivs.forEach(div => {
        div.style.display = 'none';
    });

    // Reset border thickness for all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.style.border = '1px solid grey'; // Reset to original border
    });

    // Show the target div and make the corresponding <a> link active
    const targetDiv = document.getElementById(targetDivId);
    targetDiv.style.display = 'block';
    
    const activeLink = document.querySelector(`[onclick="showDiv('${targetDivId}')"]`);
    activeLink.style.border = '3px solid grey'; // Making the active link's border thicker
}

export function showDivSaleButtons(targetDivId) {
    // Hide all contentDivs
    const contentDivs = document.querySelectorAll('.contentSaleBox');
    contentDivs.forEach(div => {
        div.style.display = 'none';
    });

    // Reset border thickness for all sidebar links
    const sidebarLinks = document.querySelectorAll('.action-btn');
    sidebarLinks.forEach(link => {
        link.style.border = '1px solid grey'; // Reset to original border
    });

    // Show the target div and make the corresponding <a> link active
    const targetDiv = document.getElementById(targetDivId);
    targetDiv.style.display = 'inline-block';
    
    const activeLink = document.querySelector(`[onClick="showDivSaleButtons('${targetDivId}')"]`);
    if(activeLink !== null) {
        activeLink.style.border = '3px solid grey'; // Making the active link's border thicker
    } else {
        console.error('No active link found for target div id:', targetDivId);
    }
}

export function setMaxValue() {
    const inputBar = document.querySelector('.input-bar');
    inputBar.value = "0";
}

export function redirectToContract() {
    window.location.href = "https://docs.aave.com/developers/getting-started/readme";  // Replace with your desired URL
}