let nota = 1;

if(nota >= 80 && nota <= 100) {
  console.log(`Parabéns, você foi aprovado(a)! Sua nota foi: ${nota}`);
}
else if(nota < 80 && nota >= 60) {
  console.log(`Você está na lista de espera! Sua nota foi: ${nota}`);
}
else if(nota < 60) {
  console.log(`Você foi reprovado(a)! Sua nota foi: ${nota}`);
}
else {
  console.log('Nota inválida!')
}