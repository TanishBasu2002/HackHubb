import FileStorageHeader from "@/components/cloud/FileStorageHeader";

/* eslint-disable react/react-in-jsx-scope */
const Page = async () =>  {
  return (
    <section>
      <h1 className='head-text mb-10'>File Storage</h1>
      <FileStorageHeader/>
    </section>
  );
}

export default Page;