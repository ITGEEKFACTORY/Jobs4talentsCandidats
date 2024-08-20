'use client';
import Appbar from '../components/AppBar'
import ProfileHearder from '../components/ui/header'

export default function LayoutCandidate({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <>
      <Appbar />

      {children}
    </>
  );
}









