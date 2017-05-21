// Entrada: Q - estados
//          E - eventos
//          f(x) - função de transferencia
//          X0 - estado inicial
//          Xm - estados marcados(finais)
class TransNode {
  constructor(state, event, newstate) {
    this.state = state;
    this.event = event;
    this.newstate = newstate;
  }

  getState() {
    return this.state;
  }

  getEvent() {
    return this.event;
  }

  getNewState() {
    return this.newstate;
  }
}

class Automato {
  constructor(states, events, transition, initstate, markedstates) {
    this.states = states;             //lista de strings
    this.events = events;             //lista de strings
    this.transition = transition;     //lista de Tuple
    this.initstate = initstate;       //string
    this.markedstates = markedstates; //lista de strings
  }

  createTransition() {

  }
}

intial_states = 'A';
states = ['A', 'B', 'C'];
events = [1, 2];
transitions = [ new TransNode('A', 1, 'B'), new TransNode('A', 2, 'C'),
                new TransNode('B', 1, 'B'), new TransNode('B', 2, 'A'),
                new TransNode('C', 1, 'B'), new TransNode('C', 2, 'A')
              ];
marked_states = ['C'];              

x = new Automato(states, events, transitions, intial_states, marked_states);
console.log(x);
