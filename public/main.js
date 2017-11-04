$('.add-newitem').on('submit', function(e) {
  e.preventDefault()
  const newTask = $(this).find('[name="task"]').val()

  const url = `/new`
  const method = 'POST'
  const data = { newTask }

  $.ajax({ url, method, data })
    .then( () => {
      window.location.href = '/'
    })

})

$('.del-task').on('click', function(e) {
  const idTask = $(this).attr("data")
  const $liContainer = $(this).closest('li')

  const url = `/delete/${ idTask }`
  const method = 'DELETE'

  $.ajax({ url, method })
    .then( (result) =>  {
      console.log(result)
      $liContainer.remove()
  })
})