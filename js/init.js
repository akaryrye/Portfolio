
document.addEventListener('DOMContentLoaded', function() {
  var sideNav = document.querySelectorAll('.sidenav');
  var modal1 = document.querySelectorAll('.modal');
  var modal2 = document.querySelectorAll('.modal');
  var modal3 = document.querySelectorAll('.modal');

  var sideInst = M.Sidenav.init(sideNav, {
    inDuration:250,
    outDuration:150
  });

  var modal1Inst = M.Modal.init(modal1, {
    opacity: 0.7,
    inDuration: 500,
    outDuration: 500
  });

  var modal2Inst = M.Modal.init(modal2, {
    opacity: 0.7,
    inDuration: 500,
    outDuration: 500
  });

  var modal3Inst = M.Modal.init(modal3Inst, {
    opacity: 0.7,
    inDuration: 500,
    outDuration: 500
  });
});