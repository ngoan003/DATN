import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const { Schema } = mongoose;

const image_newsSchema = new Schema(
	{
		trang_thai: String,
		image: Array,
		Id_news: {
			type: mongoose.Types.ObjectId,
			ref: 'news',
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
image_newsSchema.pre('save', function (next) {
	next();
});
image_newsSchema.plugin(paginate);
export default mongoose.model('image_news', image_newsSchema);
