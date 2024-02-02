import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
const TodoList = () => {
  return (
        <section>
        <Card className='max-w-[500px]'>
          <CardHeader>
            <CardTitle>Franklin todo list</CardTitle>
            <CardDescription>This is what you have for today</CardDescription>
          </CardHeader>
          <CardContent className='flex gap-3 justify-between'>
            <Input type='text' placeholder='What do i have to do?' />
            <Button>Add</Button>
          </CardContent>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <input type='checkbox' name='' id='' />
                  </TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ullam. lorem
                  </TableCell>
                  <TableCell>
                    <Button className="text-sm" variant='ghost'>X</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
  )
}
export default TodoList
