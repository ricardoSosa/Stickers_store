let cookies = Cookies()

cookies.set('name', 'dandarkus')
cookies.set('age', 21)

cookies.get('name') // 'dandarkus'

cookies.getAll() // [name: 'dandarkus', age: 21]

cookies.setJSON('cart', [{
  "user": "John Doe",
  "items": 3
},
{
  "user": "Jane Doe",
  "items": 4
}])

cookies.getJSON('cart') /*  {
                              "user": "John Doe",
                              "items": 3
                            }
                        */

cookies.delete('name')

cookies.get('name') // null
