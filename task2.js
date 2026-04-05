const searchForm = document.getElementById('searchForm');
const searchPage = document.getElementById('searchPage');
const resultsPage = document.getElementById('resultsPage');
const resultsList = document.getElementById('resultsList');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 1. Kitab adını götürürük
    const bookName = document.getElementById('bookName').value;
    // 2. Seçilmiş dili götürürük (id="bookLang" olan select elementindən)
    const bookLang = document.getElementById('bookLang').value;

    /* PHP-yə həm adı (bookName), həm də dili (bookLang) göndəririk.
       Sırf SQL Injection test etmək üçün bu məlumatları belə ayırırıq.
    */
    fetch(`search.php?bookName=${encodeURIComponent(bookName)}&bookLang=${encodeURIComponent(bookLang)}`)
    .then(response => response.text())
    .then(data => {
        searchPage.classList.add('hidden');
        resultsPage.classList.remove('hidden');
        
        // PHP-dən gələn nəticələri bura yazdırırıq
        resultsList.innerHTML = data;
    })
    .catch(error => {
        console.error('Xəta baş verdi:', error);
        resultsList.innerHTML = "<p>Bağlantı xətası baş verdi.</p>";
    });
});

// Geri qayıt düyməsi
document.getElementById('backBtn').addEventListener('click', () => {
    resultsPage.classList.add('hidden');
    searchPage.classList.remove('hidden');
});
