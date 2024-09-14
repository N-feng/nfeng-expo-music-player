import { TracksListItem } from './TracksListItem'
import { utilsStyles } from '@/styles'
import { FlatList, FlatListProps, Text, View } from 'react-native'
import library from "@/assets/data/library.json"

export type TracksListProps = Partial<FlatListProps<any>>

export const TracksList = ({...flatListProps
}: TracksListProps) => {

	return (
		<FlatList
			data={library}
			renderItem={({ item: track }) => (
				<TracksListItem track={{
						...track,
						image: track.artwork,
					}}  
				/>
			)}
			{...flatListProps}
		/>
	)
}
