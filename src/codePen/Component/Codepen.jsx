
import Code from './Code';
import '../../../init'
import Header from './Header';
import Result from './Result';
import DataProvider from '../Context/DataProvider';
import '../index.css'

const Codepen = () => {
  return (
    <>
      <DataProvider>
        <div>
          <Header />
          <Code />
          <Result />
        </div>
      </DataProvider>

    </>
  )

}

export default Codepen;