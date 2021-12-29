/* 
Esse é o componente de input onde serão digitados os nomes das tarefas que serão adicionadas. Ao lado do input, existe um botão que adiciona o conteúdo digitado no input na lista de tarefas.

Nesse arquivo temos o estado `task` que deverá ser usado na propriedade `value` do componente `TextInput` 
e a função `setTask` que deve ser usada na propriedade `onChangeText` também do `TextInput`.

Você deve implementar a função que existe no arquivo que é:

- **handleAddNewTask**: Essa função deve ser chamada quando o botão `TouchableOpacity` for pressionado ou quando a tecla `enter` do teclado for pressionada (use a propriedade `onSubmitEditing` do `TextInput` para isso).
Ao receber o nome da tarefa na função, é importante que você verifique se esse nome é uma `string` válida. Isto é, o valor recebido **deve** ser diferente de uma `string` vazia.
Essa função deve chamar a função `addTask` (recebida nas propriedades do componente) passando o estado `task` como argumento. Lembre de limpar o estado `task` sempre que uma nova `task` for adicionada.

*/

import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    //TODO - Call addTask if task not empty and clean input value 
    if(task !== '') {
      addTask(task)
      setTask('')
    }

    return 

  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
    
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
        //TODO - onPress prop
      >
        <Icon name="chevron-right" size={24} color="#B2B2B2" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: '#EBEBEB',
    color: '#666666'
  },
  addButton: {
    backgroundColor: '#FFF',
    height: 56,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});