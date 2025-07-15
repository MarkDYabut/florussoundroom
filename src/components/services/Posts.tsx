import { getPosts } from '@/utils/utils';
import { Grid } from '@once-ui-system/core';
import Post from './Post';

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
}

export function Posts({
    range,
    columns = '1',
    thumbnail = false,
    direction
}: PostsProps) {
    let allServices = getPosts(['src', 'app', 'services', 'posts']);

    const sortedServices = allServices.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedServices = range
        ? sortedServices.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedServices.length 
          )
        : sortedServices;

    return (
        <>
            {displayedServices.length > 0 && (
                <Grid
                    columns={columns} mobileColumns="1"
                    fillWidth marginBottom="40" gap="12">
                    {displayedServices.map((post) => (
                        <Post
                            key={post.slug}
                            post={post}
                            thumbnail={thumbnail}
                            direction={direction}
                        />
                    ))}
                </Grid>
            )}
        </>
    );
}