import React from 'react'
import { TODO } from '../../../../../../global'
import { Box } from '@chakra-ui/react';
import AppImage from '@/components/AppImage';

export default function BlogWrapper({ data, primaryMedia }: TODO) {
  return (
    <Box width={'100%'}>
      {primaryMedia && (
        <div className="main__image__container">
          <AppImage height={400} width={400} alt={'banner'} src={primaryMedia} />
        </div>
      )}
      {/* // {data &&
      //   data?.map((i: any, n: any) => {
      //     if (Array.isArray(i)) {
      //       return <PostBuilder key={uuidv4()} data={i} />;
      //     }
      //     if (typeof i === 'object') {
      //       const p = i.playlist.map((i: any) => ({
      //         src: i,
      //         title: data?.title,
      //         author: data?.author,
      //         time: 0,
      //         duration: 0,
      //       }));
      //       return <PlayBar playlist={p} key={n} />;
      //     }
      //     return parse(i);
      //   })}
    // </div> */}
  </Box>
  )
}
