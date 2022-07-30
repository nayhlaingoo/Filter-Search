import { writable } from 'svelte/store';
const store = () => {
	const state = {
		celebritiesData: [
			{
				id: 1,
				type: 'actress',
				height: "1.65m (5'5)",
				url: 'https://i.pinimg.com/564x/1d/a1/30/1da13050abdc15cb7fcba85a7e4342aa--red-carpet-hairstyles-emma-watson-hair.jpg',
				name: 'Emma Watson',
				detail: 'Emma Charlotte Duerre Watson is an English actress and activist.',
				link: 'https://en.wikipedia.org/wiki/Emma_Watson'
			},
			{
				id: 2,
				type: 'actress',
				height: "1.68m (5'6)",
				url: 'https://media.vanityfair.com/photos/55a674affff2c16856a6bd85/1:1/w_957,h_638,c_limit/emma-stone-aloha-miscast.jpg',
				name: 'Emma Ston',
				detail: 'Emily Jean Emma Stone is an American actress and recipient of accolades.',
				link: 'https://en.wikipedia.org/wiki/Emma_Stone'
			},
			{
				id: 3,
				type: 'actress',
				height: "1.69m (5'7)",
				url: 'https://test-storage-mumbai.s3.amazonaws.com/uploads/article/image/837/Jessica-Alba_Skin_Care_Makeup.jpg',
				name: 'Jessica Alba',
				detail: 'Jessica Marie Alba is an American actress and businesswoman.',
				link: 'https://en.wikipedia.org/wiki/Jessica_Alba'
			},
			{
				id: 4,
				type: 'actress',
				height: "1.78 m (5'10)",
				url: 'https://wallpapercave.com/wp/wp5914186.jpg',
				name: 'Taylor Swift',
				detail: 'Taylor Alison Swift is an American singer-songwriter.',
				link: 'https://en.wikipedia.org/wiki/Taylor_Swift'
			},
			{
				id: 5,
				type: 'actress',
				height: "1.73m (5'8)",
				url: 'https://musicimage.xboxlive.com/catalog/video.contributor.40f16400-0200-11db-89ca-0019b92a3933/image?locale=en-us&target=circle',
				name: 'Alexandra Daddario',
				detail: "Alexandra Anna Daddario is an American actress and she've got beautiful eyes.",
				link: 'https://en.wikipedia.org/wiki/Alexandra_Daddario'
			},
			{
				id: 7,
				type: 'actress',
				height: "1.62m (5'3)",
				url: 'https://pbs.twimg.com/profile_images/1262876295978905600/nLIxi1CN_400x400.jpg',
				name: 'Rose McIver',
				detail: 'Frances Rose McIver is a New Zealand actress. She starred as Liv in izombie.',
				link: 'https://en.wikipedia.org/wiki/Rose_McIver'
			},
			{
				id: 8,
				type: 'actress',
				height: "1.63m (5'3)",
				url: 'https://imgix.ranker.com/user_node_img/80/1588010/original/mila-kunis-people-in-tv-photo-u243?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
				name: 'Mila Kunis',
				detail: "Milena Markovna 'Mila' Kunis is an American actress.",
				link: 'https://en.wikipedia.org/wiki/Mila_Kunis'
			},
			{
				id: 9,
				type: 'actress',
				height: "1.73 m (5'8)",
				url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Katy_Perry_UNICEF_2012.jpg',
				name: 'Katy Perry',
				detail: 'Katheryn Elizabeth Hudson, known professionally as Katy Perry.',
				link: 'https://en.wikipedia.org/wiki/Katy_Perry'
			},
			{
				id: 10,
				type: 'hot',
				height: "1.78m (5'8)",
				url: 'https://i.pinimg.com/564x/34/bd/24/34bd2493a0dbb78f04997706704b7668.jpg',
				name: 'Kate Upton',
				detail: 'Katherine Elizabeth Upton She is an American model.',
				link: 'https://en.wikipedia.org/wiki/Kate_Upton'
			},
			{
				id: 11,
				type: 'hot',
				height: "1.73m (5'8)",
				url: 'https://biographia.com/wp-content/uploads/2021/10/Alexandra-Daddario-in-black-bikini-HD-PIcture.jpg',
				name: 'Alexandra Daddario',
				detail: "Alexandra Anna Daddario is an American actress and she've got beautiful eyes.",
				link: 'https://en.wikipedia.org/wiki/Alexandra_Daddario'
			},
			{
				id: 12,
				type: 'hot',
				height: "1.73m (5'6)",
				url: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2018%2F08%2Fpuma-bodywear-cara-delevingne-0.jpg?w=960&cbr=1&q=90&fit=max',
				name: 'Cara Delevingne',
				detail: 'Cara Jocelyn Delevingne is an English model, actress and singer.',
				link: 'https://en.wikipedia.org/wiki/Cara_Delevingne'
			},
			{
				id: 13,
				type: 'hot',
				height: "1.68m (5'5)",
				url: 'https://saucemonsters.com/wp-content/uploads/2019/12/Margot-Robbie-01.jpg',
				name: 'Margot Robbie',
				detail: 'Margot Elise Robbie is an Australian actress and producer.',
				link: 'https://en.wikipedia.org/wiki/Margot_Robbie'
			},
			{
				id: 14,
				type: 'hot',
				height: "1.68m (5'5)",
				url: 'https://preview.redd.it/4uzco90kx9671.jpg?width=640&crop=smart&auto=webp&s=5b29cc8a0560f6d7d776db7a5f9fa547814a36bc',
				name: 'Ana de Armas',
				detail: 'Ana Celia de Armas Caso is a Cuban and Spanish actress.',
				link: 'https://en.wikipedia.org/wiki/Ana_de_Armas'
			},
			{
				id: 15,
				type: 'hot',
				height: "1.78m (5'8)",
				url: 'https://i.pinimg.com/564x/89/99/70/89997050ece481025d75b90fac1def7d.jpg',
				name: 'Gal Gadot',
				detail: 'Gal Gadot-Varsano, She is an Israeli actress and model.',
				link: 'https://en.wikipedia.org/wiki/Gal_Gadot'
			},
			{
				id: 16,
				type: 'hot',
				height: "1.54m (5'1)",
				url: 'https://media1.popsugar-assets.com/files/thumbor/0jxf_onk3cfeRBZkkjQbmCOIT-0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/11/21/188/n/1922398/745ae5ffec04e740_GettyImages-1185301744/i/becky-g-sexiest-pictures-in-2019.jpg',
				name: 'Becky G',
				detail: 'Rebbeca Marie Gomez, known professionally as Becky G.',
				link: 'https://www.bing.com/ck/a?!&&p=05ca37cc705ad396JmltdHM9MTY1OTExNjAzMSZpZ3VpZD0zMTdlZDVmZS1jZDYwLTRhMDEtOTY4MC01OWU4YmUyYjYxODgmaW5zaWQ9NjA3Ng&ptn=3&hsh=3&fclid=9c79467a-0f64-11ed-99ab-d1641a37c824&u=a1aHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CZWNreV9H&ntb=1'
			},
			{
				id: 17,
				type: 'hot',
				height: "1.65m (5'5)",
				url: 'https://qph.cf2.quoracdn.net/main-qimg-8b5797395b39091f05544da640ec1fae-lq',
				name: 'Kristen Stewart',
				detail: 'JKristen Jaymes Stewart is an American actress and filmmaker.',
				link: 'https://en.wikipedia.org/wiki/Kristen_Stewart'
			},
			{
				id: 18,
				type: 'actress',
				height: "1.53m (5'0)",
				url: 'https://www.biography.com/.image/t_share/MTQ3MzM3MTcxNjA5NTkzNjQ3/ariana_grande_photo_jon_kopaloff_getty_images_465687098.jpg',
				name: 'Ariana Grande',
				detail: 'Ariana Grande-Butera, known professionally as Ariana Grande.',
				link: 'https://en.wikipedia.org/wiki/Ariana_Grande'
			},
			{
				id: 19,
				type: 'actress',
				height: "1.61m (5'3)",
				url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1205131883.jpg?crop=0.519xw:0.778xh;0.259xw,0.0204xh&resize=640:*',
				name: 'Billie Eilish',
				detail: 'Ariana Grande-Butera, known professionally as Ariana Grande.',
				link: 'https://www.bing.com/ck/a?!&&p=197dedda4912626dJmltdHM9MTY1OTE3MTcwOCZpZ3VpZD03OGU3ODVjZC01MjUxLTQ4N2EtODYyZS1kNGQ5ZGEzOGFkNzUmaW5zaWQ9NTY2OQ&ptn=3&hsh=3&fclid=3e674be9-0fe6-11ed-8840-fd413af42279&u=a1aHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CaWxsaWVfRWlsaXNo&ntb=1'
			},
			{
				id: 20,
				type: 'actress',
				height: "1.65m (5'4)",
				url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-on-how-she-gets-out-of-bed-on-bad-mental-health-days-1638877673.png?crop=1.00xw:0.817xh;0,0.0338xh&resize=640:*',
				name: 'Selena Gomez',
				detail: 'Selena Marie Gomez is an American singer, actress, and producer.',
				link: 'https://www.bing.com/ck/a?!&&p=a771880e8b2562f6JmltdHM9MTY1OTE3MTkyMyZpZ3VpZD0xZWY1ODQ5MS1lNjg5LTRlMmYtOTQxOC0yYTYzZmFhZjI0OGMmaW5zaWQ9NjQyOA&ptn=3&hsh=3&fclid=be4344bd-0fe6-11ed-a6d5-9286f9d6cbca&u=a1aHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TZWxlbmFfR29tZXo&ntb=1'
			},
			{
				id: 21,
				type: 'actress',
				height: "1.67m (5'5)",
				url: 'https://f.ptcdn.info/652/066/000/q0682huzgof5502OmJM-o.jpg',
				name: 'Lisa',
				detail: 'Lalisa Manobal, known mononymously as Lisa, is rapper, singer and dancer',
				link: 'https://en.wikipedia.org/wiki/Lisa_(rapper)'
			},
			{
				id: 22,
				type: 'hot',
				height: "1.65m (5'5)",
				url: 'https://www.musicraiser.com/wp-content/uploads/2020/04/miley-cyrus-Sexy-Half-nudes-31.jpg',
				name: 'Miley Cyrus',
				detail: 'Miley Ray Cyrus is an American singer, songwriter, and actress.',
				link: 'https://en.wikipedia.org/wiki/Miley_Cyrus'
			},
			{
				id: 23,
				type: 'hot',
				height: "1.57 m (5'2)",
				url: 'https://www.mordeo.org/download/23359/',
				name: 'Camila Cabello',
				detail: 'Karla Camila Cabello Estrabao is a Cuban-born American singer.',
				link: 'https://en.wikipedia.org/wiki/Camila_Cabello'
			},
			{
				id: 24,
				type: 'hot',
				height: "1.61m (5'3)",
				url: 'https://64.media.tumblr.com/1b72d9b71d6d6be77162952d067b67ca/e9fca3f1eb8ea7ff-09/s1280x1920/0b8932f98591344d7b40f85543dd99c36307413f.jpg',
				name: 'Ava Max',
				detail: 'Amanda Ava Koci, known professionally as Ava Max, is an American singer.',
				link: 'https://en.wikipedia.org/wiki/Ava_Max'
			},
			{
				id: 25,
				type: 'hot',
				height: "1.63m (5'4)",
				url: 'https://hips.hearstapps.com/sev.h-cdn.co/assets/17/06/2560x2560/square-1486945999-gettyimages-634973086.jpg?resize=640:*',
				name: 'Halsey',
				detail: 'Ashley Nicolette Frangipane, known professionally as Halsey, is an American singer.',
				link: 'https://en.wikipedia.org/wiki/Halsey_(singer)'
			}
		],
		filteredSearch: ''
	};

	const store = writable(state);

	const methods = {};
	return {
		...methods,
		...store
	};
};

export default store();
