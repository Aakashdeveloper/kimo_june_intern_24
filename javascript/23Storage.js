localStorage
// save with respect to browser
// need to remove manully
localStorage.setItem('keycode','1234')
undefined
localStorage.getItem('keycode')
'1234'
localStorage.removeItem('keycode')
undefined
localStorage.getItem('keycode')
null
localStorage.setItem('keycode','1234')


sessionStorage
// save with respect to website
// deleted as soon as tab close
sessionStorage.setItem('TeKey','2222')
undefined
sessionStorage.getItem('TeKey')
'2222'


cookies
/// save with respect to website
// have expriy time
document.cookie="cityName=Delhi; expires=Sun, 7 Jul 2024 12:00:00 UTC"
'cityName=Delhi; expires=Sun, 7 Jul 2024 12:00:00 UTC'