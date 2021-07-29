let nota = 80;
let estado = 'lista'

switch(estado) {
  case 'aprovado':
    console.log(`Parabéns, você foi aprovado(a)! Sua nota foi: ${nota}`);
    break;
  case 'lista':
    console.log(`Você está na lista de espera! Sua nota foi: ${nota}`);
    break;
  case 'reprovado':
    console.log(`Você foi reprovado(a)! Sua nota foi: ${nota}`);
    break;
  default:
    console.log('Não se aplica.');
    break;
}