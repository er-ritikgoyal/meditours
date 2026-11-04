import { cmsTranslations } from '../data/cms/i18n';
/**
 * Vietnamese translations for the deep treatment content in src/data/treatments.ts.
 *
 * Keyed by slug. Only translatable fields are included — numeric fields
 * (prices, durations, counts) live in the English source and are reused as-is.
 * AI-generated; recommend a native Vietnamese speaker with medical background
 * reviews this before it's relied on for clinical decisions.
 */

export interface FaqItemVi {
	question: string;
	answer: string;
}

export interface CostRowVi {
	country: string;
	waitTime: string;
	successRate: string;
}

export interface TreatmentDataVi {
	name: string;
	shortDescription: string;
	overview: string;
	procedures: string[];
	detailedProcedures?: { name: string; description: string }[];
	benefits: string[];
	flagshipProcedure: string;
	costComparison: CostRowVi[];
	inclusions: string[];
	exclusions: string[];
	faqs: FaqItemVi[];
}

export const viTreatments: Record<string, TreatmentDataVi> = {
	'cardiac-care': {
		name: 'Tim mạch',
		shortDescription: 'Bắc cầu, sửa van tim và nong mạch được thực hiện bởi các bác sĩ phẫu thuật đào tạo tại các trung tâm tim mạch hàng đầu.',
		overview:
			'Các chương trình tim mạch tại Ấn Độ quy tụ các bác sĩ phẫu thuật được đào tạo quốc tế cùng với một trong những khối lượng phẫu thuật lớn nhất thế giới, mang đến cho bệnh nhân cơ hội tiếp cận các thủ thuật tiên tiến như bắc cầu không dùng máy tim phổi và sửa van xâm lấn tối thiểu — với chi phí chỉ bằng một phần nhỏ so với phương Tây, không cần chờ đợi.',
		procedures: ['Phẫu thuật bắc cầu tim', 'Thay van tim', 'Nong mạch vành'],
		detailedProcedures: [
			{
				name: 'Nong mạch vành',
				description:
					'Nong mạch vành là một thủ thuật xâm lấn tối thiểu được sử dụng để mở rộng động mạch vành bị hẹp hoặc tắc nghẽn, giúp phục hồi lưu lượng máu đến cơ tim ở bệnh nhân mắc bệnh động mạch vành. Dưới gây tê tại chỗ, bác sĩ tim mạch luồn một ống thông mỏng qua động mạch ở cổ tay hoặc bẹn đến vị trí tắc nghẽn, dưới hướng dẫn hình ảnh X-quang trực tiếp, và bơm phồng một quả bóng nhỏ để ép mảng xơ vữa vào thành động mạch; trong hầu hết các trường hợp, một stent lưới kim loại sau đó được đặt lại để giữ cho mạch máu mở và giảm nguy cơ tái hẹp. Thủ thuật thường được khuyến nghị cho bệnh nhân đau thắt ngực, giảm lưu lượng máu khi làm nghiệm pháp gắng sức, hoặc như một điều trị cấp cứu trong cơn nhồi máu cơ tim để nhanh chóng khai thông mạch máu bị tắc. Thủ thuật được thực hiện trong phòng thông tim và thường mất dưới một giờ, hầu hết bệnh nhân được theo dõi qua đêm và xuất viện trong vòng một đến hai ngày. Các trung tâm tim mạch tại Ấn Độ thực hiện khối lượng lớn ca nong mạch bằng hình ảnh hiện đại và nhiều lựa chọn stent, bệnh nhân thường trở lại hoạt động nhẹ trong vòng một tuần, có bác sĩ tim mạch tư vấn về thuốc và theo dõi trước khi về nước.',
			},
			{
				name: 'Phẫu thuật bắc cầu động mạch vành (CABG)',
				description:
					'Phẫu thuật bắc cầu động mạch vành, thường gọi là CABG hay mổ bắc cầu, được thực hiện khi một hoặc nhiều động mạch vành bị hẹp hoặc tắc nghiêm trọng và nong mạch không phù hợp, thường gặp ở bệnh nhân mắc bệnh đa mạch vành hoặc bệnh động mạch vành phức tạp. Trong ca mổ, bác sĩ phẫu thuật tim lấy một mạch máu khỏe mạnh từ nơi khác trong cơ thể, thường là động mạch vú trong ở ngực hoặc tĩnh mạch ở chân, và ghép nó để tạo đường vòng cho máu lưu thông qua đoạn bị tắc. CABG truyền thống được thực hiện qua một đường rạch ở xương ức với bệnh nhân được hỗ trợ bằng máy tim phổi nhân tạo, mặc dù các phương pháp không dùng máy tim phổi và ít xâm lấn hơn cũng được áp dụng trong một số trường hợp chọn lọc. Mục tiêu là giảm đau thắt ngực, giảm nguy cơ nhồi máu cơ tim và cải thiện chức năng tim lâu dài. Hồi phục bao gồm vài ngày nằm viện, kể cả thời gian trong phòng chăm sóc đặc biệt ngay sau mổ, tiếp theo là giai đoạn hạn chế vận động có kiểm soát và phục hồi chức năng tim. Các chương trình phẫu thuật tim tại Ấn Độ kết hợp đội ngũ phẫu thuật giàu kinh nghiệm với các đơn vị chăm sóc đặc biệt trang bị tốt, bệnh nhân quốc tế thường lên kế hoạch nằm viện khoảng một tuần, sau đó vài tuần hồi phục tại chỗ trước khi bay về nước, với việc kiểm tra vết mổ và hướng dẫn phục hồi chức năng trong suốt quá trình.',
			},
			{
				name: 'Phẫu thuật thay van hai lá',
				description:
					'Thay van hai lá được thực hiện khi van hai lá, van kiểm soát dòng máu giữa tâm nhĩ trái và tâm thất trái của tim, trở nên quá hẹp (hẹp van) hoặc hở (hở van) để hoạt động bình thường và không thể sửa chữa đầy đủ. Dưới gây mê toàn thân và với bệnh nhân được hỗ trợ bằng máy tim phổi nhân tạo, bác sĩ phẫu thuật mở tim, loại bỏ van bị hỏng và khâu vào van thay thế — hoặc van cơ học, bền nhưng cần dùng thuốc chống đông máu suốt đời, hoặc van sinh học từ mô, tránh được việc dùng thuốc chống đông lâu dài nhưng có thể hỏng sớm hơn. Lựa chọn giữa các loại van phụ thuộc vào tuổi tác, lối sống và sức khỏe tổng thể của bệnh nhân, được thảo luận với đội ngũ phẫu thuật trước đó. Thủ thuật có thể được thực hiện qua phương pháp mở xương ức truyền thống hoặc, ở một số bệnh nhân chọn lọc, qua các đường rạch nhỏ ít xâm lấn hơn. Bệnh nhân thường nằm một đến hai ngày trong phòng chăm sóc đặc biệt, sau đó vài ngày nữa tại khoa trước khi xuất viện. Các trung tâm tim mạch tại Ấn Độ cung cấp cả van cơ học và van sinh học cùng với chăm sóc hậu phẫu tim mạch giàu kinh nghiệm, bệnh nhân quốc tế thường lên kế hoạch nằm viện khoảng một tuần, với siêu âm tim theo dõi được sắp xếp trước khi về nước để xác nhận van hoạt động tốt.',
			},
			{
				name: 'Thay van động mạch chủ',
				description:
					"Thay van động mạch chủ điều trị van động mạch chủ bị bệnh — van kiểm soát dòng máu từ tim vào động mạch chính của cơ thể — bị hẹp (hẹp van) hoặc hở (hở van), gây ra các triệu chứng như khó thở, đau ngực hoặc ngất xỉu. Trong phẫu thuật tim hở thông thường, lồng ngực được mở ra, tim tạm thời ngừng đập và được hỗ trợ bằng máy tim phổi nhân tạo, bác sĩ phẫu thuật loại bỏ van bị bệnh và khâu vào van thay thế cơ học hoặc sinh học có kích thước phù hợp với giải phẫu của bệnh nhân. Van cơ học bền hơn nhưng cần thuốc chống đông suốt đời, trong khi van mô tránh được điều này nhưng có thể cần thay sau mười đến hai mươi năm, đội ngũ phẫu thuật giúp bệnh nhân cân nhắc những đánh đổi này dựa trên tuổi tác và sức khỏe. Ca mổ thường kéo dài vài giờ, bệnh nhân nằm trong phòng chăm sóc đặc biệt sau đó trước khi chuyển sang khoa thường. Đây là một trong những phẫu thuật tim được thực hiện phổ biến nhất tại Ấn Độ, với các trung tâm cung cấp đầy đủ các loại van và theo dõi chu phẫu giàu kinh nghiệm. Bệnh nhân quốc tế thường lưu lại Ấn Độ khoảng hai đến ba tuần để hoàn tất phẫu thuật, hồi phục ban đầu và đánh giá theo dõi trước khi bay về nước.",
			},
			{
				name: 'Thay van động mạch chủ qua ống thông (TAVR)',
				description:
					'Thay van động mạch chủ qua ống thông, hay TAVR, là một lựa chọn thay thế ít xâm lấn cho phẫu thuật tim hở để điều trị hẹp van động mạch chủ nặng, đặc biệt ở bệnh nhân cao tuổi hoặc được coi là nguy cơ cao đối với phẫu thuật thông thường. Thay vì mở lồng ngực, bác sĩ tim mạch can thiệp luồn một ống thông mang theo van thay thế có thể gấp lại qua mạch máu, thường ở bẹn, lên đến tim, nơi nó được mở rộng và định vị bên trong van bị bệnh hiện có của bệnh nhân, đẩy van cũ sang một bên và ngay lập tức đảm nhận chức năng của nó. Thủ thuật thường được thực hiện dưới an thần hoặc gây mê nhẹ và được hướng dẫn bằng hình ảnh trực tiếp, không cần ngừng tim hay dùng máy tim phổi nhân tạo. Vì tránh được đường rạch lớn ở ngực, hồi phục nói chung nhanh hơn so với thay van bằng phẫu thuật, nhiều bệnh nhân có thể vận động trong vòng một ngày và xuất viện trong vài ngày. TAVR ngày càng được cung cấp tại các trung tâm tim mạch tiên tiến của Ấn Độ cho bệnh nhân đáp ứng các tiêu chí giải phẫu phù hợp, sau khi đánh giá hình ảnh cẩn thận để xác nhận sự phù hợp. Bệnh nhân quốc tế thường lên kế hoạch một đến hai tuần tại Ấn Độ để đánh giá trước thủ thuật, thực hiện thủ thuật và một giai đoạn hồi phục ngắn trước khi theo dõi và về nước.',
			},
			{
				name: 'Thông tim',
				description:
					'Thông tim là một thủ thuật chẩn đoán và đôi khi là điều trị, trong đó một ống thông mỏng, mềm dẻo được luồn qua mạch máu, thường ở cổ tay hoặc bẹn, vào các buồng và động mạch của tim để đánh giá trực tiếp cách tim hoạt động. Sử dụng hướng dẫn X-quang và thuốc cản quang, bác sĩ tim mạch có thể quan sát các động mạch vành để tìm tắc nghẽn, đo áp lực trong các buồng tim, đánh giá chức năng van và trong một số trường hợp lấy mẫu mô. Thủ thuật thường được dùng để khảo sát đau ngực, kết quả nghiệm pháp gắng sức bất thường, suy tim chưa rõ nguyên nhân, hoặc nghi ngờ bệnh van tim hay tim bẩm sinh, và thường là bước đầu tiên trước khi quyết định có cần nong mạch, đặt stent hay phẫu thuật hay không. Thủ thuật được thực hiện dưới gây tê tại chỗ kèm an thần nhẹ, thường mất ba mươi phút đến một giờ, hầu hết bệnh nhân có thể về nhà trong ngày hoặc sau một đêm theo dõi. Các phòng thông tim của Ấn Độ được trang bị hệ thống hình ảnh hiện đại cho phép chẩn đoán chính xác và, khi thích hợp, điều trị ngay trong cùng một lần can thiệp. Bệnh nhân quốc tế thường chỉ cần một chuyến thăm ngắn cho bản thân thủ thuật, kết quả và các bước tiếp theo được thảo luận trực tiếp với đội ngũ tim mạch.',
			},
			{
				name: 'Nong van động mạch phổi bằng bóng',
				description:
					'Nong van động mạch phổi bằng bóng là một thủ thuật dựa trên ống thông được sử dụng để điều trị hẹp van động mạch phổi, tình trạng van kiểm soát dòng máu từ tâm thất phải của tim đến phổi bị hẹp bất thường, buộc tim phải làm việc vất vả hơn và giảm lưu lượng máu đến phổi. Tình trạng này thường được chẩn đoán ở trẻ sơ sinh, trẻ em hoặc người trẻ tuổi, đôi khi là một phần của bệnh tim bẩm sinh từ khi sinh ra. Trong thủ thuật, bác sĩ tim mạch luồn một ống thông có quả bóng xẹp ở đầu qua tĩnh mạch, thường ở bẹn, vào van bị hẹp, sau đó bơm phồng bóng để nong rộng và giải phóng tắc nghẽn. Thủ thuật được thực hiện dưới an thần hoặc gây mê toàn thân trong phòng thông tim, dưới hướng dẫn hình ảnh X-quang và siêu âm tim, thường mất một đến hai giờ. Vì tránh được phẫu thuật tim hở, hồi phục thường nhanh, hầu hết bệnh nhân được theo dõi qua đêm và xuất viện trong một đến hai ngày. Các trung tâm tim mạch nhi và tim mạch cấu trúc tại Ấn Độ thường xuyên thực hiện nong van bằng bóng cho cả trẻ em và người lớn, với hình ảnh đánh giá trước thủ thuật cẩn thận để xác nhận sự phù hợp. Các gia đình đi điều trị thủ thuật này thường lên kế hoạch lưu trú ngắn khoảng một tuần, bao gồm đánh giá trước thủ thuật và siêu âm tim theo dõi.',
			},
			{
				name: 'Đặt máy tạo nhịp tim',
				description:
					'Máy tạo nhịp tim là một thiết bị điện tử nhỏ được cấy ghép để giúp điều hòa nhịp tim bất thường chậm hoặc không đều, thường được sử dụng để điều trị các tình trạng như nhịp tim chậm, block tim hoặc một số rối loạn nhịp tim mà hệ thống điện tự nhiên của tim hoạt động không ổn định. Thiết bị bao gồm một máy phát xung, được cấy ngay dưới da gần xương đòn, kết nối với một hoặc nhiều dây dẫn mỏng được luồn qua tĩnh mạch vào các buồng tim, nơi chúng cảm nhận nhịp tim và phát ra các xung điện nhỏ khi cần để duy trì nhịp đập đều đặn. Việc cấy ghép thường được thực hiện dưới gây tê tại chỗ kèm an thần, mất khoảng một đến hai giờ, và được thực hiện qua một đường rạch nhỏ thay vì phẫu thuật mở. Hầu hết bệnh nhân nằm viện qua đêm để theo dõi và kiểm tra cài đặt thiết bị trước khi xuất viện. Các trung tâm điện sinh lý học và tim mạch tại Ấn Độ cung cấp nhiều loại máy tạo nhịp một buồng, hai buồng và các thiết bị tiên tiến hơn phù hợp với các rối loạn nhịp khác nhau. Bệnh nhân quốc tế thường lên kế hoạch khoảng một tuần tại Ấn Độ để đánh giá trước thủ thuật, cấy ghép và kiểm tra thiết bị ban đầu, cùng với hướng dẫn về theo dõi từ xa và tái khám với bác sĩ tại quê nhà sau đó.',
			},
			{
				name: 'Phẫu thuật tim nhi',
				description:
					'Phẫu thuật tim nhi bao gồm nhiều ca mổ được thực hiện trên trẻ sơ sinh và trẻ em để điều chỉnh các dị tật tim bẩm sinh — các vấn đề cấu trúc của tim có từ khi sinh ra, chẳng hạn như lỗ thông giữa các buồng tim, van tim bị dị dạng, hoặc các kết nối bất thường của các mạch máu lớn. Thủ thuật cụ thể phụ thuộc vào dị tật: một số tình trạng có thể được vá bằng một miếng vá trong phẫu thuật tim hở sử dụng máy tim phổi nhân tạo có kích thước phù hợp với bệnh nhân nhỏ, trong khi những tình trạng khác liên quan đến việc tái tạo hoặc định tuyến lại các mạch máu để thiết lập tuần hoàn bình thường. Chẩn đoán thường dựa vào siêu âm tim, và đôi khi là hình ảnh CT hoặc MRI, để lập bản đồ giải phẫu chính xác trước khi lên kế hoạch phẫu thuật. Vì tim và mạch máu của trẻ em nhỏ và vẫn đang phát triển, các thủ thuật này đòi hỏi bác sĩ phẫu thuật tim nhi và bác sĩ gây mê giàu kinh nghiệm về các bệnh tim bẩm sinh, cùng với hỗ trợ chăm sóc đặc biệt nhi khoa chuyên biệt sau đó. Thời gian hồi phục rất khác nhau tùy theo mức độ phức tạp của dị tật và tuổi của trẻ, từ khoảng một tuần đến vài tuần nằm viện. Các chương trình tim mạch nhi của Ấn Độ điều trị nhiều loại dị tật bẩm sinh, thường cho trẻ em từ các nước khác, với chỗ ở cho gia đình và chăm sóc trước và sau phẫu thuật được phối hợp theo nhu cầu của bệnh nhân nhỏ tuổi và cha mẹ các em.',
			},
			{
				name: 'Cấy ghép tim nhân tạo / LVAD',
				description:
					'Thiết bị hỗ trợ tâm thất trái, hay LVAD, là một bơm cơ học được cấy ghép để giúp một trái tim bị suy yếu nghiêm trọng lưu thông máu, được sử dụng ở bệnh nhân suy tim giai đoạn nặng không đáp ứng đầy đủ với thuốc. Thiết bị được kết nối phẫu thuật với tâm thất trái và động mạch chủ, hút máu từ buồng tim bị suy yếu và bơm vào động mạch chính của cơ thể thay cho cơ tim bị suy; một dây cáp đi ra qua da đến bộ điều khiển và pin bên ngoài được bệnh nhân đeo. LVAD có thể đóng vai trò là cầu nối chờ ghép tim trong khi bệnh nhân chờ tạng hiến, hoặc là liệu pháp dài hạn hơn cho những người không phải là ứng viên ghép tạng. Việc cấy ghép đòi hỏi phẫu thuật tim hở với tuần hoàn ngoài cơ thể, sau đó là thời gian nằm viện kéo dài bao gồm theo dõi chăm sóc đặc biệt và đào tạo cho bệnh nhân và người chăm sóc về cách vận hành thiết bị. Thuật ngữ tim nhân tạo đôi khi được dùng một cách không chính xác cho LVAD, mặc dù tim nhân tạo toàn phần thay thế hoàn toàn trái tim là một công nghệ riêng biệt, hiếm gặp hơn. Các trung tâm suy tim nặng tiên tiến của Ấn Độ cung cấp cấy ghép LVAD và chăm sóc theo dõi chuyên biệt mà nó đòi hỏi, bệnh nhân nên dự kiến thời gian lưu trú kéo dài vài tuần cho phẫu thuật, hồi phục và đào tạo sử dụng thiết bị trước khi về nước.',
			},
			{
				name: 'Phẫu thuật nội mạch điều trị phình động mạch chủ',
				description:
					'Phẫu thuật nội mạch điều trị phình động mạch chủ, hay EVAR, là một thủ thuật xâm lấn tối thiểu được sử dụng để điều trị phình động mạch chủ — một đoạn phình to, suy yếu của động mạch chính trong cơ thể, có nguy cơ vỡ nếu không được điều trị. Thay vì mở bụng hoặc ngực để thay thế trực tiếp đoạn bị ảnh hưởng, bác sĩ phẫu thuật mạch máu tiếp cận động mạch đùi ở bẹn và luồn một stent ghép bọc vải qua mạch máu đến vị trí phình, nơi nó được mở rộng để lót bên trong động mạch và chuyển hướng dòng máu ra khỏi thành mạch bị suy yếu. Thủ thuật được thực hiện dưới gây tê vùng hoặc gây mê toàn thân, dưới hướng dẫn hình ảnh X-quang liên tục, và thường mất một đến ba giờ tùy vị trí và độ phức tạp của khối phình. Vì tránh được đường rạch phẫu thuật lớn, hồi phục nói chung nhanh hơn so với phẫu thuật mở, nhiều bệnh nhân có thể vận động trong vòng một đến hai ngày và xuất viện trong khoảng một tuần. Hình ảnh CT cẩn thận trước đó xác nhận hình dạng và kích thước khối phình phù hợp với stent ghép. Các trung tâm phẫu thuật mạch máu của Ấn Độ cung cấp EVAR với nhiều loại thiết bị stent ghép, bệnh nhân quốc tế thường lên kế hoạch khoảng hai tuần để đánh giá, thực hiện thủ thuật và theo dõi hình ảnh sau thủ thuật.',
			},
			{
				name: 'Phẫu thuật tim hở',
				description:
					'Phẫu thuật tim hở là thuật ngữ chung cho bất kỳ ca mổ tim nào trong đó lồng ngực được phẫu thuật mở ra, thường qua một đường rạch ở xương ức, để đội ngũ phẫu thuật tiếp cận trực tiếp với tim và các mạch máu lớn của nó. Nhiều ca mổ như vậy được thực hiện với tim tạm thời ngừng đập và máy tim phổi nhân tạo đảm nhận tuần hoàn và hô hấp, cho phép bác sĩ phẫu thuật thao tác trên một trái tim tĩnh lặng, không có máu trước khi khởi động lại. Các lý do phổ biến cho phẫu thuật tim hở bao gồm bắc cầu các động mạch vành bị tắc, sửa chữa hoặc thay thế van tim bị hỏng, điều chỉnh dị tật bẩm sinh và sửa chữa phình mạch liên quan đến tim hoặc mạch máu lớn. Kỹ thuật và thời gian phụ thuộc vào tình trạng bệnh lý nền, nhưng hầu hết các ca mổ mất vài giờ và sau đó là thời gian trong phòng chăm sóc đặc biệt khi bệnh nhân được cai máy thở và theo dõi chảy máu, nhiễm trùng và thay đổi nhịp tim. Thời gian nằm viện dài hơn, từ một đến hai tuần, thường theo sau, cùng với phục hồi chức năng tim có cấu trúc để xây dựng lại sức mạnh và sức bền. Các trung tâm phẫu thuật tim của Ấn Độ thực hiện khối lượng lớn các thủ thuật tim hở trong các nhóm này, được hỗ trợ bởi các đơn vị chăm sóc đặc biệt tim mạch chuyên biệt, bệnh nhân quốc tế thường lên kế hoạch vài tuần tại nước sở tại để hoàn tất phẫu thuật và hồi phục ban đầu.',
			},
			{
				name: 'Điều trị bệnh tim bẩm sinh',
				description:
					'Bệnh tim bẩm sinh đề cập đến các bất thường cấu trúc của tim hoặc các mạch máu lớn có từ khi sinh ra, từ những lỗ nhỏ giữa các buồng tim có thể tự đóng lại đến các dị dạng phức tạp cần phẫu thuật điều chỉnh theo từng giai đoạn. Điều trị được cá nhân hóa cao và bắt đầu bằng hình ảnh chẩn đoán chi tiết, thường là siêu âm tim và đôi khi là CT hoặc MRI tim, để lập bản đồ chính xác dị tật trước khi bác sĩ tim mạch nhi hoặc người lớn về bệnh tim bẩm sinh và đội ngũ phẫu thuật quyết định phương pháp tốt nhất. Một số dị tật, chẳng hạn như thông liên nhĩ hoặc thông liên thất nhỏ, có thể được đóng lại bằng thiết bị qua ống thông mà không cần phẫu thuật mở, trong khi các tình trạng phức tạp hơn cần phẫu thuật tim hở, đôi khi được thực hiện theo từng giai đoạn trong nhiều tháng hoặc nhiều năm khi bệnh nhân lớn lên. Nhiều bệnh nhân được chẩn đoán và điều trị từ thời thơ ấu, nhưng ngày càng có nhiều người lớn mắc bệnh tim bẩm sinh cũng cần chăm sóc liên tục hoặc điều chỉnh khi các dị tật nhẹ từ thời thơ ấu tiến triển theo thời gian. Các chương trình tim bẩm sinh của Ấn Độ quản lý toàn bộ phổ các tình trạng này, từ đóng thiết bị đơn giản đến tái tạo phức tạp theo từng giai đoạn, với các đội ngũ chuyên biệt cho cả bệnh nhân nhi và người lớn. Vì kế hoạch điều trị thay đổi rất nhiều theo từng dị tật, các gia đình quốc tế thường bắt đầu bằng một đánh giá chi tiết từ xa hoặc trực tiếp trước khi xác nhận lộ trình điều trị và thời gian lưu trú.',
			},
		],
		benefits: [
			'Bác sĩ phẫu thuật được đào tạo và chứng nhận tại Mỹ, Anh và châu Âu',
			'Một trong những khối lượng phẫu thuật tim lớn nhất thế giới, đồng nghĩa với kinh nghiệm thực tế sâu rộng',
			'Khoa ICU tim mạch chuyên biệt và đơn vị hồi phục trung gian',
			'Không cần chờ đợi — hầu hết các ca can thiệp được lên lịch trong vòng vài ngày sau ý kiến đầu tiên',
		],
		flagshipProcedure: 'Phẫu thuật bắc cầu động mạch vành (CABG)',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '95–97%' },
			{ country: 'Vương quốc Anh', waitTime: '3–12 tháng (NHS)', successRate: '95–97%' },
			{ country: 'Đức', waitTime: '4–10 tuần', successRate: '94–96%' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '93–95%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '96%+' },
		],
		inclusions: [
			'Đánh giá tim mạch trước phẫu thuật, điện tâm đồ, siêu âm tim và phân tích chụp mạch',
			'Chi phí bác sĩ phẫu thuật cho thủ thuật bắc cầu hoặc van tim',
			'Chi phí phòng mổ và gây mê',
			'Thời gian nằm ICU tim mạch (3 ngày) và phòng hồi phục riêng (6 ngày)',
			'Chăm sóc y tế, theo dõi và vật lý trị liệu trong thời gian nằm viện',
			'Thuốc tim mạch tiêu chuẩn và vật tư trong thời gian lưu trú',
			'Chi phí xét nghiệm và chẩn đoán hình ảnh liên quan đến thủ thuật',
			'Tóm tắt xuất viện và kế hoạch chăm sóc sau phẫu thuật bằng văn bản',
		],
		exclusions: [
			'Thời gian nằm viện trước khi nhập viện để ổn định bệnh nhân trước khi phê duyệt can thiệp',
			'Thời gian nằm viện hoặc ICU vượt quá thời hạn của gói dịch vụ',
			'Các can thiệp nâng cao như bắc cầu lần thứ hai hoặc sửa van ngoài phạm vi ban đầu',
			'Các thiết bị cấy ghép như máy tạo nhịp tim, nếu không được đề cập trước',
			'Thuốc mang về nhà ngoài bộ thuốc xuất viện tiêu chuẩn',
			'Điều trị các tình trạng có sẵn không liên quan được phát hiện khi đánh giá',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật bắc cầu tim tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói phẫu thuật bắc cầu động mạch vành (CABG) tại Ấn Độ bắt đầu từ 8.000 USD, thấp hơn khoảng 90% so với mức 120.000+ USD thường được tính tại Mỹ. Gói dịch vụ bao gồm đánh giá trước phẫu thuật, bản thân ca can thiệp, thời gian nằm ICU và phòng bệnh, chăm sóc y tế và thuốc tiêu chuẩn.',
			},
			{
				question: 'Tỷ lệ thành công của phẫu thuật tim tại Ấn Độ là bao nhiêu?',
				answer:
					'Các trung tâm tim mạch hàng đầu tại Ấn Độ báo cáo tỷ lệ thành công từ 96% trở lên đối với phẫu thuật bắc cầu và van tim, tương đương với các chương trình tốt nhất tại Mỹ và châu Âu, được hỗ trợ bởi khoa ICU tim mạch chuyên biệt và khối lượng phẫu thuật hàng năm cao.',
			},
			{
				question: 'Tôi cần ở lại Ấn Độ bao lâu để phẫu thuật tim?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 9 ngày (3 ngày ICU, 6 ngày phòng hồi phục) và nên ở lại Ấn Độ tổng cộng khoảng 3 tuần để đội ngũ tim mạch có thể theo dõi quá trình hồi phục trước khi về nước.',
			},
			{
				question: 'Tôi có cần kiểm tra sức khỏe toàn diện trước khi ca phẫu thuật được xác nhận không?',
				answer:
					'Có. Báo cáo của bạn (điện tâm đồ, siêu âm tim, chụp mạch nếu có) sẽ được hội đồng tim mạch của chúng tôi xem xét trước khi hoàn tất kế hoạch điều trị và báo giá, và một buổi tư vấn từ xa với bác sĩ phẫu thuật sẽ được sắp xếp nếu cần.',
			},
			{
				question: 'Có phẫu thuật bắc cầu xâm lấn tối thiểu hoặc không dùng máy tim phổi không?',
				answer:
					'Có, nhiều bệnh viện đối tác của chúng tôi cung cấp bắc cầu không dùng máy tim phổi (tim vẫn đập) và sửa van xâm lấn tối thiểu, giúp giảm thời gian nằm ICU và thời gian hồi phục tùy theo trường hợp của bạn.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo tim mạch gần đây của bạn qua biểu mẫu liên hệ hoặc WhatsApp, và điều phối viên sẽ sắp xếp đánh giá chuyên môn miễn phí cùng báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	orthopedics: {
		name: 'Chỉnh hình',
		shortDescription: 'Thay khớp và y học thể thao với các chương trình hồi phục nhanh.',
		overview:
			'Từ thay khớp gối bằng robot đến hàn cột sống phức tạp, các trung tâm chỉnh hình tại Ấn Độ kết hợp công nghệ cấy ghép hiện đại với các chương trình vật lý trị liệu bài bản, giúp bệnh nhân đứng dậy nhanh hơn.',
		procedures: ['Thay khớp gối', 'Thay khớp háng', 'Hàn cột sống'],
		detailedProcedures: [
			{
				name: 'Thay toàn bộ khớp gối',
				description:
					'Thay toàn bộ khớp gối là phẫu thuật tái tạo bề mặt khớp gối bị tổn thương do thoái hóa khớp, viêm khớp dạng thấp hoặc hao mòn sau chấn thương, bằng một vật liệu cấy ghép nhân tạo làm từ hợp kim kim loại và nhựa polyethylene y tế. Bác sĩ phẫu thuật chỉnh hình loại bỏ phần sụn mòn và một lớp xương mỏng ở đầu dưới xương đùi và đầu trên xương chày, sau đó lắp các thành phần kim loại được tạo hình lên các bề mặt này cùng một miếng đệm nhựa ở giữa để tái tạo chuyển động khớp trơn tru; bề mặt xương bánh chè cũng có thể được tái tạo tùy tình trạng. Phẫu thuật thường được chỉ định khi các biện pháp bảo tồn như vật lý trị liệu, kiểm soát cân nặng, thuốc và tiêm khớp không còn kiểm soát được cơn đau hoặc phục hồi khả năng vận động. Ca mổ được thực hiện dưới gây tê tủy sống hoặc gây mê toàn thân, kéo dài khoảng một đến hai giờ, nhiều trung tâm hiện sử dụng hỗ trợ máy tính hoặc robot để cải thiện độ chính xác khi đặt vật liệu cấy ghép. Các bệnh viện tại Ấn Độ thực hiện khối lượng lớn ca thay khớp mỗi năm với cả kỹ thuật truyền thống và xâm lấn tối thiểu. Hồi phục bao gồm việc đi lại có hỗ trợ trong vòng một ngày sau mổ, nằm viện vài ngày và chương trình vật lý trị liệu bài bản trong những tuần tiếp theo để lấy lại sức mạnh và tầm vận động.',
			},
			{
				name: 'Thay toàn bộ khớp háng',
				description:
					'Thay toàn bộ khớp háng thay thế khớp háng bị mòn do thoái hóa khớp, hoại tử vô mạch, viêm khớp dạng thấp hoặc gãy xương bằng vật liệu cấy ghép chỏm-ổ cối nhân tạo. Trong ca mổ, bác sĩ phẫu thuật chỉnh hình loại bỏ chỏm xương đùi bị tổn thương và tạo hình lại ổ cối, sau đó lắp một cuống kim loại hoặc gốm vào xương đùi, phía trên gắn thành phần chỏm khớp với lớp lót ổ cối mới được cố định vào khung chậu. Đường mổ có thể là phía sau, phía trước hoặc xâm lấn tối thiểu, tùy theo giải phẫu bệnh nhân và kinh nghiệm bác sĩ, thủ thuật thường kéo dài một đến hai giờ dưới gây tê tủy sống hoặc gây mê toàn thân. Phẫu thuật thường được cân nhắc khi đau háng, cứng khớp và giảm vận động kéo dài dù đã vật lý trị liệu, hạn chế chịu lực và dùng thuốc giảm đau, cùng hình ảnh xác nhận thoái hóa khớp đáng kể. Nhiều trung tâm chỉnh hình tại Ấn Độ thực hiện khối lượng lớn ca thay khớp háng mỗi năm với các lựa chọn cố định xi măng, không xi măng và lai ghép cùng kỹ thuật robot hoặc định vị máy tính để đặt vật liệu cấy ghép chính xác. Sau mổ, bệnh nhân thường tập đi với khung tập đi trong vòng một đến hai ngày, nằm viện vài ngày và theo chương trình phục hồi chức năng bài bản trong những tuần sau đó để khôi phục sức mạnh và dáng đi.',
			},
			{
				name: 'Nội soi khớp gối',
				description:
					'Nội soi khớp gối là kỹ thuật phẫu thuật xâm lấn tối thiểu dùng để chẩn đoán và điều trị các vấn đề bên trong khớp gối qua các đường rạch nhỏ thay vì một đường mổ mở lớn. Bác sĩ đưa một camera sợi quang mỏng, gọi là ống nội soi, cùng các dụng cụ phẫu thuật nhỏ qua vài cổng nhỏ quanh gối, cho phép quan sát trực tiếp sụn, dây chằng, sụn chêm và màng bao khớp trên màn hình. Kỹ thuật này thường được dùng để cắt gọt hoặc sửa chữa sụn chêm bị rách, loại bỏ các mảnh sụn rời, làm nhẵn bề mặt sụn gồ ghề, rửa sạch mô viêm trong khớp, hoặc xử lý các nguyên nhân cấu trúc khác gây đau, sưng, kẹt khớp hoặc khóa khớp gối kéo dài chưa đáp ứng với nghỉ ngơi, vật lý trị liệu hoặc thuốc. Thủ thuật thường được thực hiện dưới gây tê tủy sống, vùng hoặc gây mê toàn thân, kéo dài từ ba mươi phút đến hơn một giờ tùy phát hiện và điều trị cần thiết. Vì đường rạch nhỏ, bệnh nhân thường ít đau sau mổ hơn và trở lại hoạt động hàng ngày nhanh hơn so với mổ gối mở. Các trung tâm chỉnh hình tại Ấn Độ thực hiện nội soi khớp gối thường xuyên theo hình thức trong ngày hoặc lưu viện ngắn, hầu hết bệnh nhân đi lại có hỗ trợ ngay trong ngày và bắt đầu vật lý trị liệu có hướng dẫn ngay sau đó để khôi phục chức năng gối hoàn toàn.',
			},
			{
				name: 'Tái tạo dây chằng chéo trước (ACL) qua nội soi',
				description:
					'Tái tạo dây chằng chéo trước qua nội soi sửa chữa tình trạng rách dây chằng chéo trước, một trong những dây chằng ổn định chính của khớp gối, thường bị tổn thương trong các môn thể thao có động tác xoay đột ngột, nhảy hoặc đổi hướng nhanh. Vì dây chằng chéo trước bị rách thường không tự lành, bác sĩ phẫu thuật tái tạo nó bằng một mảnh ghép, thường lấy từ gân cơ khoeo hoặc gân bánh chè của chính bệnh nhân, hoặc đôi khi từ mô hiến, được luồn qua các đường hầm khoan trong xương đùi và xương chày rồi cố định bằng vít hoặc thiết bị cố định để tái tạo lại vị trí và chức năng ban đầu của dây chằng. Thủ thuật được thực hiện qua nội soi qua các đường rạch cổng nhỏ bằng camera và dụng cụ chuyên dụng, tránh phải mổ mở lớn, thường kéo dài khoảng một đến hai giờ dưới gây mê vùng hoặc toàn thân. Thủ thuật thường được chỉ định cho bệnh nhân có khớp gối mất vững, cảm giác khuỵu gối, hoặc không thể trở lại chơi thể thao hay công việc nặng sau chấn thương dây chằng chéo trước. Các đơn vị y học thể thao và chỉnh hình tại Ấn Độ cung cấp cả kỹ thuật ghép gân khoeo và gân bánh chè cùng hỗ trợ định vị bằng robot hoặc hệ thống dẫn đường khi đặt đường hầm. Hồi phục đòi hỏi chương trình phục hồi chức năng bài bản kéo dài nhiều tháng với tập chịu lực, tăng cường sức mạnh và cân bằng tiến triển trước khi trở lại thể thao an toàn.',
			},
			{
				name: 'Tái tạo dây chằng chéo sau (PCL) qua nội soi',
				description:
					'Tái tạo dây chằng chéo sau qua nội soi điều trị tình trạng rách dây chằng chéo sau, một dây chằng ổn định chắc hơn và ít bị tổn thương hơn so với dây chằng chéo trước, nằm phía sau nó, thường rách do một lực tác động trực tiếp vào mặt trước cẳng chân, chẳng hạn chấn thương va vào bảng điều khiển trong tai nạn xe hơi, hoặc do ngã mạnh lên gối đang gập. Nhiều tổn thương PCL một phần được điều trị không phẫu thuật bằng nẹp và vật lý trị liệu, nhưng các trường hợp rách hoàn toàn gây mất vững kéo dài, hoặc kết hợp với tổn thương dây chằng khác, thường cần tái tạo bằng phẫu thuật. Bác sĩ dùng dụng cụ nội soi và camera đưa qua các cổng nhỏ để loại bỏ phần dây chằng tổn thương còn sót lại và luồn một mảnh ghép gân, thường lấy từ gân khoeo, gân bánh chè hoặc mô hiến, qua các đường hầm xương trong xương đùi và xương chày, cố định dưới lực căng kiểm soát để khôi phục sự ổn định của khớp gối. Ca mổ thường kéo dài hai đến ba giờ dưới gây mê vùng hoặc toàn thân và về mặt kỹ thuật phức tạp hơn tái tạo ACL do vị trí và nguồn cấp máu của dây chằng. Các trung tâm chỉnh hình và chấn thương thể thao tại Ấn Độ có bác sĩ giàu kinh nghiệm thực hiện kỹ thuật tái tạo PCL một bó và hai bó. Hồi phục đòi hỏi chương trình phục hồi chức năng kéo dài và theo từng giai đoạn cẩn thận hơn so với phẫu thuật ACL, kèm nẹp và tập chịu lực tăng dần để bảo vệ mảnh ghép đang lành.',
			},
			{
				name: 'Phẫu thuật rách sụn chêm',
				description:
					'Phẫu thuật rách sụn chêm điều trị tổn thương lớp sụn hình chữ C bên trong khớp gối có chức năng giảm xóc và ổn định khớp giữa xương đùi và xương chày, thường rách do động tác xoay trong thể thao hoặc do thoái hóa dần ở người lớn tuổi. Tùy vị trí, kích thước và dạng rách, bác sĩ thực hiện một trong hai phương pháp nội soi: khâu sửa sụn chêm, trong đó các mép rách được khâu lại để bảo tồn tối đa mô sụn, đặc biệt ở bệnh nhân trẻ có tổn thương ở vùng ngoài giàu mạch máu, hoặc cắt sụn chêm bán phần, trong đó phần sụn chêm tổn thương, mất vững được cắt gọt trong khi giữ lại mô lành. Cả hai thủ thuật đều được thực hiện qua các đường rạch cổng nhỏ bằng ống nội soi và dụng cụ tinh vi, thường kéo dài ba mươi đến sáu mươi phút dưới gây tê tủy sống hoặc gây mê toàn thân. Phẫu thuật thường được khuyến nghị khi đau, sưng, kẹt hoặc khóa khớp kéo dài dù đã nghỉ ngơi và vật lý trị liệu, hoặc khi MRI xác nhận một vết rách có thể sửa chữa hoặc mất vững. Các đơn vị nội soi khớp tại Ấn Độ thường xuyên cung cấp cả kỹ thuật khâu sửa và cắt sụn chêm, lựa chọn phương pháp bảo tồn tốt nhất chức năng gối lâu dài. Hồi phục sau cắt sụn chêm thường nhanh hơn, trong khi khâu sửa đòi hỏi giai đoạn phục hồi chức năng được bảo vệ kỹ hơn để mô khâu lành lại.',
			},
			{
				name: 'Phẫu thuật ghép giá đỡ sụn',
				description:
					'Phẫu thuật ghép giá đỡ sụn là kỹ thuật bảo tồn khớp dùng để điều trị các vùng sụn khớp bị tổn thương hoặc mất, lớp mô trơn bao phủ đầu xương trong khớp, thường gặp nhất ở khớp gối sau chấn thương, căng thẳng lặp lại hoặc thoái hóa khu trú sớm. Vì sụn có khả năng tự lành hạn chế, thủ thuật này đưa một giá đỡ tương thích sinh học, đôi khi được cấy thêm tế bào sụn hoặc tế bào từ tủy xương của chính bệnh nhân, vào vùng khuyết để tạo khung cấu trúc giúp hình thành mô giống sụn mới theo thời gian. Thủ thuật thường được thực hiện qua nội soi hoặc qua một đường rạch nhỏ, vùng tổn thương được chuẩn bị và đo đạc trước khi giá đỡ được tạo hình, cố định bằng keo fibrin hoặc chỉ khâu và để tích hợp với mô xung quanh. Bệnh nhân phù hợp thường là người trẻ, năng động có một tổn thương sụn khu trú và trục khớp còn tương đối tốt, chứ không phải viêm khớp lan rộng, vì mục tiêu là trì hoãn hoặc tránh việc phải thay khớp. Các trung tâm chỉnh hình cung cấp dịch vụ tái tạo và y học thể thao tại Ấn Độ cung cấp nhiều kỹ thuật ghép giá đỡ và sửa chữa sụn dựa trên tế bào phù hợp với kích thước và độ sâu tổn thương. Hồi phục bao gồm giai đoạn hạn chế chịu lực và phục hồi chức năng dần dần, được theo dõi sát sao để mô mới trưởng thành.',
			},
			{
				name: 'Phẫu thuật ổn định khớp vai qua nội soi',
				description:
					'Phẫu thuật ổn định khớp vai qua nội soi được thực hiện để điều chỉnh tình trạng khớp vai trật khớp hoặc bán trật lặp đi lặp lại do dây chằng và mô sụn viền bị giãn, rách hoặc bong ra, những cấu trúc thường giữ chỏm khớp vai chắc chắn trong ổ khớp. Mất vững thường xảy ra sau một lần trật khớp do chấn thương ban đầu, thường trong thể thao hoặc té ngã, sau đó các cấu trúc mô mềm của khớp không lành đủ chắc để ngăn các lần trật tiếp theo. Dùng ống nội soi và dụng cụ tinh vi đưa qua các đường rạch cổng nhỏ quanh vai, bác sĩ khâu lại hoặc làm căng lại sụn viền và bao khớp bị rách vào rìa ổ khớp bằng neo chỉ, khôi phục độ căng cần thiết để giữ khớp ở vị trí trung tâm khi vận động. Thủ thuật thường kéo dài khoảng một giờ, thực hiện dưới gây tê vùng kết hợp an thần nhẹ hoặc gây mê toàn thân. Thủ thuật thường được khuyến nghị cho bệnh nhân mất vững tái phát, dấu hiệu lo sợ dương tính khi khám, và hình ảnh cho thấy tổn thương sụn viền hoặc bao khớp, đặc biệt ở người trẻ hoặc năng động có nguy cơ trật khớp cao. Các đơn vị chấn thương vai và thể thao tại Ấn Độ thường xuyên thực hiện kỹ thuật nội soi này. Hồi phục bao gồm giai đoạn bất động bằng đai treo sau đó là chương trình vật lý trị liệu bài bản để lấy lại vận động và sức mạnh quanh khớp.',
			},
			{
				name: 'Phẫu thuật sửa chóp xoay vai qua nội soi',
				description:
					'Phẫu thuật sửa chóp xoay vai qua nội soi điều trị tình trạng rách chóp xoay, nhóm bốn cơ và gân ổn định khớp vai và nâng cánh tay, có thể rách đột ngột do té ngã hoặc chấn thương, hoặc rách dần do tuổi tác và vận động tay quá đầu lặp lại. Bệnh nhân thường có cơn đau vai nặng hơn về đêm, yếu khi nâng hoặc xoay tay, và khó khăn với các động tác tay qua đầu chưa cải thiện dù nghỉ ngơi, vật lý trị liệu hoặc tiêm khớp. Trong thủ thuật, bác sĩ đưa ống nội soi và dụng cụ nhỏ qua vài đường rạch cổng quanh vai, cắt gọt mô viêm hoặc xơ hóa, rồi khâu lại mép gân rách vào vị trí bám gốc trên xương cánh tay bằng neo chỉ, khôi phục lực kéo của gân lên xương. Ca mổ thường được thực hiện dưới gây tê vùng kèm an thần hoặc gây mê toàn thân, kéo dài khoảng một đến hai giờ tùy kích thước và độ phức tạp của vết rách. Các đơn vị chỉnh hình và chuyên khoa vai tại Ấn Độ cung cấp kỹ thuật này cho cả rách bán phần và toàn phần. Sau mổ, tay được bảo vệ trong đai treo vài tuần trong khi gân lành, tiếp theo là chương trình vật lý trị liệu tiến triển từ vận động thụ động đến tập luyện tăng cường chủ động trong vài tháng.',
			},
			{
				name: 'Phẫu thuật sửa tổn thương Bankart qua nội soi',
				description:
					'Phẫu thuật sửa tổn thương Bankart qua nội soi điều trị cụ thể tổn thương Bankart, một vết rách của sụn viền — vòng sụn làm sâu thêm ổ khớp vai — khỏi rìa trước-dưới của khớp, một chấn thương thường xảy ra khi khớp vai trật khớp do chấn thương và là nguyên nhân hàng đầu gây mất vững tái phát. Nếu không điều trị, tổn thương Bankart khiến khớp vai tiếp tục trượt hoặc trật hoàn toàn dù chỉ chịu lực tương đối nhỏ, đặc biệt ở bệnh nhân trẻ và vận động viên. Qua các đường rạch cổng nhỏ, bác sĩ dùng ống nội soi để quan sát sụn viền bị bong và khâu lại vào rìa xương của ổ khớp bằng các neo chỉ đặt dọc theo vết rách, khôi phục hiệu ứng đệm của sụn viền giúp giữ chỏm xương cánh tay ở vị trí trung tâm. Trong các trường hợp có mất xương kèm theo ở ổ khớp, có thể kết hợp thêm thủ thuật ghép xương cùng với sửa chữa. Ca mổ thường kéo dài khoảng một giờ dưới gây mê vùng kèm an thần hoặc gây mê toàn thân. Các đơn vị nội soi vai tại Ấn Độ thực hiện sửa chữa Bankart thường quy cho bệnh nhân có tổn thương sụn viền được xác nhận trên MRI hoặc chụp khớp cản quang CT và tiền sử trật khớp tái phát. Chăm sóc sau mổ bao gồm vài tuần bất động bằng đai treo, tiếp theo là chương trình vật lý trị liệu theo giai đoạn để khôi phục vận động, ổn định và sức mạnh.',
			},
			{
				name: 'Phẫu thuật vai qua nội soi (lỗ khóa)',
				description:
					'Phẫu thuật vai qua nội soi, hay còn gọi là phẫu thuật lỗ khóa, là phương pháp xâm lấn tối thiểu dùng để chẩn đoán và điều trị nhiều tình trạng vai khác nhau qua vài đường rạch nhỏ thay vì một đường mổ mở lớn. Một camera mỏng gọi là ống nội soi được đưa vào khớp để bác sĩ quan sát phóng đại, chi tiết các gân, dây chằng, sụn và màng khớp trên màn hình, trong khi các dụng cụ mảnh đưa qua các cổng riêng được dùng để cắt gọt, sửa chữa hoặc tái tạo mô tổn thương. Kỹ thuật này áp dụng cho nhiều tình trạng từ rách chóp xoay, mất vững khớp vai đến hội chứng chèn ép, giải phóng vai đông cứng và loại bỏ dị vật hoặc gai xương, các bước cụ thể tùy thuộc vào phát hiện và điều trị. Thủ thuật thường được chỉ định khi các triệu chứng như đau, yếu, cứng khớp hoặc hạn chế vận động không cải thiện dù nghỉ ngơi, vật lý trị liệu và thuốc. Thực hiện dưới gây tê vùng, an thần hoặc gây mê toàn thân, các đường rạch nhỏ thường giúp giảm đau sau mổ, giảm nguy cơ nhiễm trùng và hồi phục ban đầu nhanh hơn so với mổ vai mở truyền thống. Các trung tâm chỉnh hình tại Ấn Độ với đơn vị chuyên khoa vai cung cấp kỹ thuật này cho hầu hết các bệnh lý vai phổ biến. Hồi phục vẫn cần chương trình vật lý trị liệu bài bản theo từng bệnh lý để khôi phục chức năng vai hoàn toàn trong vài tuần đến vài tháng.',
			},
			{
				name: 'Phẫu thuật ung thư xương',
				description:
					'Phẫu thuật ung thư xương được thực hiện để loại bỏ khối u ác tính phát sinh trong mô xương, chẳng hạn sarcoma xương, sarcoma Ewing hoặc sarcoma sụn, hoặc đã di căn đến xương từ ung thư nơi khác trong cơ thể. Lập kế hoạch điều trị thường bắt đầu bằng chẩn đoán hình ảnh, gồm X-quang, MRI, CT và xạ hình xương, cùng sinh thiết để xác định loại và độ ác tính của khối u, sau đó đội ngũ đa chuyên khoa quyết định phối hợp phù hợp nhất giữa phẫu thuật, hóa trị và xạ trị. Khi khả thi, bác sĩ phẫu thuật hiện ưu tiên phẫu thuật bảo tồn chi, loại bỏ khối u cùng một biên mô lành và tái tạo xương, khớp bị ảnh hưởng bằng vật liệu cấy ghép kim loại, ghép xương hoặc kết hợp cả hai, giữ lại chi thay vì cắt cụt, chỉ dành cho trường hợp khối u xâm lấn dây thần kinh, mạch máu lớn hoặc mô mềm rộng. Phẫu thuật thường được thực hiện dưới gây mê toàn thân và có thể kéo dài nhiều giờ tùy kích thước, vị trí khối u và độ phức tạp của tái tạo cần thiết. Các trung tâm ung bướu chỉnh hình tại Ấn Độ cung cấp kỹ thuật bảo tồn chi cùng phác đồ hóa trị trước và sau mổ. Hồi phục bao gồm thời gian nằm viện một đến hai tuần, tiếp theo là chương trình phục hồi chức năng kéo dài để lấy lại chức năng, cùng theo dõi liên tục để phát hiện tái phát.',
			},
			{
				name: 'Phẫu thuật kéo dài chi',
				description:
					'Phẫu thuật kéo dài chi tăng dần chiều dài của một xương bị ngắn, thường gặp nhất ở chân, để điều chỉnh tình trạng chênh lệch chiều dài chi do dị tật bẩm sinh, tổn thương sụn tăng trưởng ở trẻ em, nhiễm trùng, gãy xương lành lệch hoặc một số bệnh loạn sản xương. Bác sĩ trước tiên thực hiện một đường cắt xương có kiểm soát, gọi là cắt xương, mà không làm tổn hại nguồn cấp máu xung quanh, sau đó áp dụng khung cố định ngoài đeo bên ngoài chi hoặc một đinh kéo dài từ tính đặt bên trong xương. Trong các tuần tiếp theo, thiết bị được điều chỉnh mỗi ngày với các bước rất nhỏ, thường khoảng một milimét mỗi ngày, cho phép xương mới hình thành dần trong khe hở trong khi mô mềm, dây thần kinh và mạch máu giãn ra theo. Tổng thời gian điều trị, bao gồm giai đoạn kéo dài và giai đoạn xương liền sau đó, thường kéo dài nhiều tháng và cần theo dõi sát bằng X-quang định kỳ để đánh giá quá trình liền xương và điều chỉnh kế hoạch khi cần. Các trung tâm tái tạo chi tại Ấn Độ cung cấp cả kỹ thuật khung cố định ngoài và đinh trong tùy mức độ kéo dài cần thiết và nguyện vọng bệnh nhân. Vật lý trị liệu trong suốt quá trình giúp duy trì vận động khớp và sức mạnh cơ, hầu hết bệnh nhân cần lưu trú dài tại nước điều trị để được theo dõi an toàn trong giai đoạn kéo dài tích cực.',
			},
			{
				name: 'Phẫu thuật bàn chân khoèo',
				description:
					'Phẫu thuật bàn chân khoèo điều trị dị tật bàn chân khoèo bẩm sinh, một tình trạng từ khi sinh trong đó một hoặc cả hai bàn chân bị xoay vào trong và xuống dưới do gân bị rút ngắn và xương bàn chân lệch bất thường. Hầu hết các trường hợp hiện được điều trị ban đầu bằng phương pháp Ponseti, một cách tiếp cận không phẫu thuật dùng nắn chỉnh nhẹ nhàng liên tục và bó bột trong vài tuần để dần điều chỉnh vị trí bàn chân, thường tiếp theo bằng một thủ thuật nhỏ cắt gân gót chân bị căng. Phẫu thuật trở nên cần thiết khi việc điều chỉnh bằng bó bột chưa hoàn toàn, khi dị tật kháng trị hoặc tái phát, hoặc ở trẻ lớn chưa được điều trị sớm, có thể từ cắt hoặc chuyển gân đơn giản đến các thủ thuật xương và khớp phức tạp hơn để chỉnh lại cấu trúc bàn chân. Ca mổ cụ thể phụ thuộc vào tuổi trẻ, mức độ dị tật và các mô gây ra vị trí bất thường. Phẫu thuật được thực hiện dưới gây mê toàn thân, bàn chân thường được bất động trong bột sau đó để bảo vệ kết quả chỉnh sửa trong khi lành. Các trung tâm chỉnh hình nhi tại Ấn Độ quản lý bàn chân khoèo qua cả phác đồ Ponseti và chỉnh sửa phẫu thuật cho các trường hợp kháng trị hoặc bị bỏ sót. Theo dõi lâu dài với nẹp và kiểm tra định kỳ thường cần thiết khi trẻ lớn lên.',
			},
			{
				name: 'Điều trị loạn sản khớp háng',
				description:
					'Điều trị loạn sản khớp háng giải quyết tình trạng loạn sản phát triển khớp háng, trong đó ổ cối quá nông để bao phủ và ổn định đúng cách chỏm xương đùi, từ lỏng lẻo nhẹ đến trật khớp hoàn toàn, thường được phát hiện ở trẻ sơ sinh qua sàng lọc nhưng đôi khi được chẩn đoán muộn hơn ở trẻ em hoặc người trưởng thành. Ở trẻ sơ sinh nhỏ, điều trị thường bắt đầu bằng đai định vị, chẳng hạn đai Pavlik, đeo trong vài tuần để nhẹ nhàng dẫn khớp háng vào vị trí ổn định, khít đúng trong khi ổ cối phát triển bình thường. Khi loạn sản được chẩn đoán muộn hơn, nặng hơn hoặc không đáp ứng với đai nẹp, có thể cần các lựa chọn phẫu thuật, từ nắn chỉnh kín hoặc mở khớp háng đến cắt xương quanh ổ cối hoặc xương chậu để tạo hình và định vị lại ổ cối cho bao phủ chỏm xương đùi tốt hơn, đôi khi kết hợp với cắt xương đùi. Phẫu thuật được thực hiện dưới gây mê toàn thân và thường tiếp theo bằng giai đoạn bất động bằng bột hoặc nẹp để bảo vệ kết quả chỉnh sửa. Các đơn vị bảo tồn khớp háng nhi và người lớn tại Ấn Độ cung cấp cả phác đồ đai nẹp cho trẻ sơ sinh và kỹ thuật cắt xương tái tạo cho trẻ lớn và người trẻ tuổi. Theo dõi lâu dài rất quan trọng, vì loạn sản không điều trị hoặc chỉnh sửa chưa đủ có thể dẫn đến thoái hóa khớp háng sớm.',
			},
			{
				name: 'Điều trị rối loạn cơ xương khớp',
				description:
					'Điều trị rối loạn cơ xương khớp bao gồm chẩn đoán và quản lý nhiều tình trạng ảnh hưởng đến xương, khớp, cơ, gân, dây chằng và dây thần kinh tạo nên hệ vận động của cơ thể, bao gồm viêm khớp, đau lưng và cổ mạn tính, chấn thương gân và dây chằng, gãy xương, dị tật và các bệnh lý cột sống thoái hóa. Quản lý thường bắt đầu bằng đánh giá lâm sàng và chẩn đoán hình ảnh, như X-quang, MRI hoặc CT, để xác định nguyên nhân gây đau, cứng khớp, yếu cơ hoặc hạn chế vận động, sau đó bác sĩ chỉnh hình đề xuất hướng điều trị có thể bao gồm vật lý trị liệu, thuốc, tiêm khớp định hướng, nẹp hoặc phẫu thuật tùy mức độ và bản chất bệnh lý. Khi cần phẫu thuật, có thể từ các thủ thuật nội soi xâm lấn tối thiểu đến thay khớp, cố định cột sống hoặc phẫu thuật tái tạo chỉnh sửa, lựa chọn theo chẩn đoán cụ thể và mục tiêu sức khỏe, chức năng tổng thể của bệnh nhân. Các trung tâm chỉnh hình đa chuyên khoa tại Ấn Độ quy tụ đội ngũ thay khớp, cột sống, y học thể thao và vật lý trị liệu để quản lý các vấn đề cơ xương khớp phức tạp hoặc kéo dài theo một kế hoạch phối hợp thống nhất. Vì biểu hiện bệnh rất đa dạng, việc xem xét hình ảnh và báo cáo lâm sàng trước đó giúp xác định hướng điều trị phù hợp nhất trước khi bệnh nhân lên đường. Thời gian hồi phục và phục hồi chức năng phụ thuộc hoàn toàn vào bệnh lý cụ thể và can thiệp được chọn.',
			},
		],
		benefits: [
			'Thay khớp bằng robot và hỗ trợ máy tính có sẵn tại các trung tâm hàng đầu',
			'Vật lý trị liệu bài bản tại bệnh viện ngay từ ngày đầu',
			'Vật liệu cấy ghép chất lượng cao, nhập khẩu quốc tế',
			'Thời gian nằm viện điển hình 3–5 ngày cho thay khớp',
		],
		flagshipProcedure: 'Thay toàn bộ khớp gối',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–6 tuần', successRate: '96–98%' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '96–98%' },
			{ country: 'Đức', waitTime: '3–6 tuần', successRate: '95–97%' },
			{ country: 'Thái Lan', waitTime: '2–3 tuần', successRate: '94–96%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '97%+' },
		],
		inclusions: [
			'Đánh giá chỉnh hình trước phẫu thuật, bao gồm chụp X-quang và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ phẫu thuật và gây mê cho ca thay khớp',
			'Chi phí phòng mổ và vật liệu cấy ghép (chất lượng tiêu chuẩn, nếu không chọn loại cao cấp hơn)',
			'1 ngày ICU/hồi phục cộng 4 ngày phòng riêng',
			'Các buổi vật lý trị liệu bài bản tại bệnh viện',
			'Xét nghiệm, chẩn đoán hình ảnh và thuốc sau phẫu thuật tiêu chuẩn trong thời gian lưu trú',
			'Tóm tắt xuất viện kèm chương trình bài tập tại nhà và kế hoạch hồi phục',
		],
		exclusions: [
			'Vật liệu cấy ghép cao cấp hoặc theo yêu cầu riêng ngoài loại tiêu chuẩn',
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Phẫu thuật hai bên (cả hai đầu gối), nếu không được báo giá riêng',
			'Các buổi vật lý trị liệu ngoại trú sau khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Phẫu thuật chỉnh sửa do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Thay khớp gối tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói thay toàn bộ khớp gối tại Ấn Độ bắt đầu từ 5.500 USD, thấp hơn khoảng 85% so với mức giá thông thường tại Mỹ, bao gồm chi phí bác sĩ phẫu thuật, vật liệu cấy ghép, thời gian nằm viện và vật lý trị liệu tại bệnh viện.',
			},
			{
				question: 'Có thay khớp gối bằng robot không?',
				answer:
					'Có, một số bệnh viện đối tác của chúng tôi cung cấp thay khớp bằng robot và hỗ trợ máy tính, giúp cải thiện độ chính xác của vật liệu cấy ghép và giảm thời gian hồi phục cho các bệnh nhân đủ điều kiện.',
			},
			{
				question: 'Thời gian nằm viện và hồi phục kéo dài bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 5 ngày và nên ở lại Ấn Độ 2–3 tuần để các nhà vật lý trị liệu có thể hướng dẫn quá trình hồi phục ban đầu trước khi về nước.',
			},
			{
				question: 'Những thương hiệu vật liệu cấy ghép nào được sử dụng?',
				answer:
					'Các bệnh viện đối tác của chúng tôi sử dụng tiêu chuẩn là các thương hiệu vật liệu cấy ghép được chứng nhận quốc tế, với tùy chọn cao cấp hơn theo yêu cầu và báo giá riêng.',
			},
			{
				question: 'Có thể thay cả hai đầu gối trong cùng một chuyến đi không?',
				answer:
					'Có, thay khớp gối hai bên đồng thời hoặc theo giai đoạn có thể thực hiện cho các ứng viên phù hợp — bác sĩ phẫu thuật sẽ xác nhận phương án tốt nhất sau khi xem xét phim X-quang và tình trạng sức khỏe tổng quát.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Gửi phim X-quang và tóm tắt triệu chứng của bạn qua biểu mẫu liên hệ, bạn sẽ nhận được đánh giá chuyên môn và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	oncology: {
		name: 'Ung bướu',
		shortDescription: 'Chăm sóc ung bướu đa chuyên khoa kết hợp phẫu thuật, hóa trị và xạ trị định hướng.',
		overview:
			'Điều trị ung thư tại Ấn Độ được cung cấp bởi các hội đồng ung bướu quy tụ bác sĩ phẫu thuật ung bướu, bác sĩ ung bướu nội khoa và chuyên gia xạ trị để xây dựng kế hoạch điều trị phối hợp — cùng mô hình đa chuyên khoa được sử dụng tại các trung tâm ung bướu hàng đầu phương Tây.',
		procedures: ['Phẫu thuật khối u', 'Hóa trị', 'Xạ trị'],
		detailedProcedures: [
			{
				name: 'Điều trị ung thư vú',
				description:
					'Điều trị ung thư vú tại Ấn Độ được lập kế hoạch bởi hội đồng ung bướu đa chuyên khoa chuyên trách, xem xét kết quả chụp nhũ ảnh, sinh thiết và các báo cáo thụ thể nội tiết (ER/PR/HER2) trước khi đề xuất phác đồ phù hợp với giai đoạn và loại khối u. Tùy chẩn đoán, điều trị có thể kết hợp phẫu thuật bảo tồn vú (cắt u) hoặc cắt toàn bộ vú cùng sinh thiết hạch gác, sau đó là hóa trị bổ trợ, liệu pháp nhắm trúng đích (như trastuzumab cho bệnh HER2 dương tính), liệu pháp nội tiết và xạ trị để giảm nguy cơ tái phát. Các lựa chọn tái tạo vú, bao gồm tái tạo tức thì hoặc trì hoãn, có sẵn cho bệnh nhân chọn cắt toàn bộ vú. Các trung tâm ung bướu hàng đầu tại Ấn Độ sử dụng chụp nhũ ảnh kỹ thuật số, sinh thiết dưới hướng dẫn MRI và phân tích mô cắt lạnh trong mổ để lập kế hoạch phẫu thuật bảo tồn mô bất cứ khi nào giai đoạn khối u cho phép. Bệnh nhân thường cần nằm viện ngắn cho phẫu thuật, với hóa trị và xạ trị được thực hiện ngoại trú trong các tuần sau đó — nhiều bệnh nhân lên kế hoạch lưu trú dài hơn tại Ấn Độ để hoàn thành một chu kỳ đầu của điều trị bổ trợ trước khi về nước theo kế hoạch chăm sóc chung với bác sĩ ung bướu tại địa phương. Ý kiến thứ hai về tiêu bản sinh thiết và hình ảnh được xem xét miễn phí trước khi bạn quyết định đi điều trị.',
			},
			{
				name: 'Điều trị ung thư khoang miệng',
				description:
					'Ung thư khoang miệng — phát sinh ở lưỡi, niêm mạc má, nướu, sàn miệng hoặc môi — là một trong những loại ung thư được điều trị phổ biến nhất tại Ấn Độ, nơi các đơn vị ung bướu đầu-cổ có khối lượng lớn tiếp nhận nhiều ca liên quan đến thuốc lá và cau trầu. Điều trị bắt đầu bằng sinh thiết và chẩn đoán hình ảnh (CT/MRI, đôi khi PET-CT) để đánh giá giai đoạn khối u, sau đó là phẫu thuật cắt bỏ với biên an toàn, thường kết hợp nạo vét hạch cổ để loại bỏ các hạch có nguy cơ di căn. Phẫu thuật tái tạo vi phẫu mạch máu — dùng vạt mô từ cẳng tay, đùi hoặc xương mác — phục hồi hình thể và chức năng khi một phần đáng kể hàm hoặc lưỡi bị cắt bỏ. Tùy kết quả giải phẫu bệnh, phẫu thuật có thể tiếp theo bằng xạ trị bổ trợ hoặc hóa-xạ trị đồng thời để giảm nguy cơ tái phát. Một đội ngũ đa chuyên khoa gồm bác sĩ phẫu thuật đầu-cổ, bác sĩ ung bướu, chuyên gia phục hình răng và nhà trị liệu ngôn ngữ-nuốt quản lý toàn bộ quá trình điều trị, bao gồm phục hồi chức năng nói và ăn uống sau mổ. Ung thư giai đoạn sớm, phát hiện trước khi di căn hạch, có tiên lượng tốt hơn đáng kể, vì vậy bệnh nhân được khuyến khích gửi báo cáo sinh thiết và hình ảnh để hội đồng ung bướu xem xét ngay khi nghi ngờ chẩn đoán.',
			},
			{
				name: 'Điều trị ung thư tuyến tiền liệt',
				description:
					'Điều trị ung thư tuyến tiền liệt tại Ấn Độ bao gồm từ theo dõi tích cực cho khối u nguy cơ rất thấp, phát triển chậm, đến cắt tuyến tiền liệt tận gốc bằng robot, xạ trị và liệu pháp nội tiết cho bệnh tiến triển hơn. Sau khi chẩn đoán qua xét nghiệm PSA, MRI và sinh thiết, bác sĩ ung bướu tiết niệu phân độ ung thư bằng thang điểm Gleason để xác định phương pháp phù hợp nhất. Cắt tuyến tiền liệt bằng robot (da Vinci) có sẵn rộng rãi tại các trung tâm tiết niệu hàng đầu của Ấn Độ, cung cấp phẫu thuật bảo tồn thần kinh nhằm giữ lại khả năng kiểm soát tiểu tiện và chức năng tình dục trong khi loại bỏ tuyến tiền liệt và, khi cần, các hạch bạch huyết xung quanh. Với bệnh nhân không phù hợp phẫu thuật hoặc muốn phương pháp không phẫu thuật, xạ trị chùm tia ngoài, xạ trị áp sát hoặc IMRT/IGRT có thể cung cấp xạ trị định hướng cao trong khi hạn chế ảnh hưởng đến các cơ quan lân cận. Liệu pháp ức chế nội tiết tố nam (liệu pháp nội tiết) được dùng cùng phẫu thuật hoặc xạ trị ở các trường hợp nguy cơ trung bình và cao, hoặc dùng riêng cho bệnh tiến triển. Hồi phục sau phẫu thuật robot thường nhanh hơn mổ mở, hầu hết bệnh nhân xuất viện trong vài ngày và trở lại hoạt động bình thường trong vài tuần. Trường hợp của bạn sẽ được hội đồng ung bướu xem xét trước khi đưa ra khuyến nghị cuối cùng.',
			},
			{
				name: 'Điều trị ung thư nội mạc tử cung',
				description:
					'Ung thư nội mạc tử cung (lớp niêm mạc tử cung) là một trong những bệnh ung thư phụ khoa dễ điều trị nhất khi phát hiện sớm, và các đơn vị ung bướu phụ khoa tại Ấn Độ cung cấp đánh giá giai đoạn và phẫu thuật toàn diện cho phụ nữ được chẩn đoán ở bất kỳ giai đoạn nào. Đánh giá ban đầu gồm siêu âm qua ngả âm đạo, sinh thiết nội mạc tử cung và chẩn đoán hình ảnh để xác định mức độ lan rộng của bệnh. Điều trị tiêu chuẩn là cắt toàn bộ tử cung cùng loại bỏ vòi trứng và buồng trứng, thường được thực hiện qua nội soi ổ bụng hoặc bằng robot để giảm mất máu, sẹo và thời gian hồi phục so với mổ mở. Lấy mẫu hạch bạch huyết hoặc sinh thiết hạch gác được thực hiện trong cùng ca mổ để giúp xác định có cần điều trị thêm hay không. Tùy độ mô học và giai đoạn phát hiện khi mổ, xạ trị bổ trợ (chùm tia ngoài hoặc áp sát) hoặc hóa trị có thể được khuyến nghị để giảm nguy cơ tái phát. Với phụ nữ trẻ muốn bảo tồn khả năng sinh sản khi bệnh ở giai đoạn rất sớm, độ mô học thấp, điều trị nội tiết không phẫu thuật có thể là lựa chọn sau đánh giá kỹ lưỡng. Hầu hết bệnh nhân cắt tử cung xâm lấn tối thiểu xuất viện trong hai đến ba ngày và trở lại hoạt động bình thường trong vài tuần.',
			},
			{
				name: 'Điều trị bệnh bạch cầu',
				description:
					'Bệnh bạch cầu — ung thư các tế bào tạo máu trong tủy xương — được điều trị tại Ấn Độ bởi các đội ngũ huyết học-ung bướu chuyên trách, có khả năng tiếp cận các xét nghiệm chẩn đoán tiên tiến như đếm tế bào dòng chảy, di truyền tế bào và xét nghiệm phân tử, thiết yếu để phân loại chính xác phân nhóm (cấp hay mạn, dòng lympho hay dòng tủy) và chọn phác đồ phù hợp. Điều trị thường bắt đầu bằng hóa trị tấn công để đưa bệnh vào lui bệnh, tiếp theo là hóa trị củng cố để loại bỏ tế bào bạch cầu còn sót lại; một số phân nhóm, như bạch cầu mạn dòng tủy, được quản lý bằng liệu pháp uống nhắm trúng đích (ức chế tyrosine kinase) thay vì hóa trị mạnh. Với các trường hợp nguy cơ cao hoặc tái phát, có thể khuyến nghị ghép tủy xương hoặc tế bào gốc, dùng người hiến cùng huyết thống phù hợp, người hiến không cùng huyết thống, hoặc tế bào của chính bệnh nhân. Chăm sóc được thực hiện tại các đơn vị huyết học chuyên biệt có phòng cách ly ngược, hỗ trợ ngân hàng máu và quy trình kiểm soát nhiễm khuẩn phù hợp cho bệnh nhân suy giảm miễn dịch trong quá trình điều trị. Vì phác đồ bạch cầu kéo dài nhiều tháng, nhiều bệnh nhân phối hợp giai đoạn điều trị tích cực đầu tiên tại Ấn Độ với hóa trị tiếp theo được bác sĩ tại quê nhà theo dõi, cùng báo cáo thường xuyên được chia sẻ giữa các đội ngũ để giữ kế hoạch điều trị đúng hướng.',
			},
			{
				name: 'Điều trị U lympho Hodgkin',
				description:
					'U lympho Hodgkin, một bệnh ung thư hệ bạch huyết đặc trưng bởi sự hiện diện của tế bào Reed-Sternberg, có một trong những tỷ lệ chữa khỏi cao nhất trong các bệnh ung thư khi được điều trị bằng phác đồ hóa trị tiêu chuẩn (thường là ABVD), và các trung tâm ung bướu tại Ấn Độ tuân theo các phác đồ phân giai đoạn và điều trị được quốc tế công nhận. Chẩn đoán được xác nhận qua sinh thiết hạch và phân giai đoạn bằng hình ảnh PET-CT để lập bản đồ mức độ lan rộng của bệnh trên và dưới cơ hoành. Hầu hết bệnh nhân được điều trị bằng một đợt hóa trị phối hợp kéo dài vài tháng, đáp ứng được đánh giá qua các lần chụp PET-CT giữa kỳ giúp bác sĩ ung bướu quyết định tiếp tục, điều chỉnh hoặc bổ sung xạ trị cho bệnh còn sót lại. Bệnh khu trú, giai đoạn sớm có thể được điều trị bằng đợt hóa trị ngắn hơn tiếp theo bằng xạ trị vùng tổn thương, trong khi bệnh giai đoạn tiến triển thường cần đợt hóa trị dài hơn đơn thuần. Với các trường hợp tái phát hoặc kháng trị, hóa trị cứu vãn tiếp theo bằng ghép tế bào gốc tự thân có sẵn tại các trung tâm hàng đầu. Các chu kỳ hóa trị được thực hiện ngoại trú trong ngày bất cứ khi nào có thể, hội đồng ung bướu của bạn sẽ vạch ra lịch trình đầy đủ từng chu kỳ trước khi bạn lên đường.',
			},
			{
				name: 'Hóa trị',
				description:
					'Hóa trị sử dụng thuốc gây độc tế bào hoặc nhắm trúng đích để tiêu diệt tế bào ung thư hoặc ngăn chúng phân chia, được dùng làm điều trị chính cho ung thư máu và u lympho, hoặc làm liệu pháp bổ trợ/tân bổ trợ cùng phẫu thuật và xạ trị cho khối u đặc. Các đơn vị ung bướu ngoại trú ban ngày tại Ấn Độ được trang bị ghế truyền hóa chất chuyên dụng, điều dưỡng ung bướu được đào tạo và phác đồ pha chế theo cân nặng, diện tích bề mặt cơ thể phù hợp với các phác đồ điều trị quốc tế. Trước khi bắt đầu, bác sĩ ung bướu của bạn xem xét công thức máu, chức năng cơ quan và báo cáo trước đó để chọn phác đồ, độ dài chu kỳ và số chu kỳ phù hợp với loại và giai đoạn ung thư của bạn. Hầu hết phác đồ được truyền ngoại trú kéo dài vài giờ, lặp lại mỗi hai đến ba tuần, kèm thuốc hỗ trợ (chống nôn, yếu tố tăng trưởng) để kiểm soát tác dụng phụ. Xét nghiệm máu định kỳ giữa các chu kỳ theo dõi biến chứng như giảm công thức máu, liều được điều chỉnh tương ứng. Với bệnh nhân kết hợp chuyến đi Ấn Độ với giai đoạn đầu của hóa trị, đội ngũ ung bướu cung cấp phác đồ và báo cáo bằng văn bản để bác sĩ tại địa phương có thể an toàn tiếp tục hoặc theo dõi các chu kỳ tiếp theo tại nhà.',
			},
			{
				name: 'Xạ trị điều biến cường độ (IMRT)',
				description:
					'Xạ trị điều biến cường độ (IMRT) là dạng xạ trị chùm tia ngoài tiên tiến, định hình và thay đổi cường độ hàng trăm chùm tia riêng lẻ để khớp sát với hình dạng ba chiều của khối u, cung cấp liều cao hơn, hiệu quả hơn cho ung thư trong khi bảo vệ mô và cơ quan lành xung quanh. Kỹ thuật này được sử dụng rộng rãi tại Ấn Độ cho ung thư đầu-cổ, tuyến tiền liệt, vú, não và phụ khoa, nơi các cấu trúc lân cận như tủy sống, tuyến nước bọt hoặc bàng quang cần được bảo vệ khỏi tổn thương do xạ trị. Lập kế hoạch điều trị bắt đầu bằng chụp CT mô phỏng, bác sĩ xạ trị và kỹ sư vật lý y khoa dùng để lập bản đồ khối u và thiết kế kế hoạch chùm tia trên phần mềm chuyên dụng trước khi bắt đầu điều trị. IMRT được thực hiện trong các buổi ngoại trú ngắn hàng ngày, thường năm ngày một tuần trong vài tuần, mỗi buổi kéo dài 15–20 phút. Vì kỹ thuật này giảm liều xạ đến mô lành, bệnh nhân thường ít tác dụng phụ hơn so với kỹ thuật xạ trị cũ, như ít khô miệng hơn sau xạ trị đầu-cổ hoặc dung nạp ruột và bàng quang tốt hơn sau xạ trị vùng chậu. Kiểm tra hình ảnh định kỳ đảm bảo điều trị luôn được định hướng chính xác trong suốt liệu trình.',
			},
			{
				name: 'Xạ trị dẫn đường bằng hình ảnh (IGRT)',
				description:
					'Xạ trị dẫn đường bằng hình ảnh (IGRT) kết hợp chẩn đoán hình ảnh tiên tiến — như CT chùm tia hình nón hoặc kiểm tra bằng tia X — với mỗi buổi xạ trị để xác nhận vị trí chính xác của khối u ngay trước khi điều trị, điều chỉnh những thay đổi nhỏ hàng ngày do hô hấp, độ đầy của cơ quan hoặc tư thế bệnh nhân. Lớp chính xác bổ sung này đặc biệt có giá trị với các khối u di động hoặc thay đổi vị trí, như ung thư phổi, gan, tuyến tiền liệt và tụy, cho phép bác sĩ xạ trị an toàn cung cấp liều cao hơn, hiệu quả hơn trong khi giảm thêm ảnh hưởng đến các cơ quan lành xung quanh. IGRT thường được kết hợp với IMRT hoặc các kỹ thuật xạ trị định hình khác thay vì dùng riêng lẻ, các trung tâm ung bướu tại Ấn Độ cung cấp kỹ thuật này được trang bị hệ thống hình ảnh tích hợp trong máy gia tốc tuyến tính để việc xác nhận diễn ra ngay trong buổi điều trị, không cần thêm lần khám riêng. Đội ngũ xạ trị xem xét hình ảnh ở mỗi buổi, hoặc theo khoảng thời gian định sẵn, và điều chỉnh tư thế bệnh nhân trước khi phát tia. Như các hình thức xạ trị ngoài khác, các buổi điều trị ngắn, không đau và được thực hiện ngoại trú theo liệu trình lập kế hoạch riêng cho loại và giai đoạn ung thư của bạn.',
			},
			{
				name: 'Điều trị bằng CyberKnife',
				description:
					'CyberKnife là hệ thống xạ phẫu bằng robot cung cấp liều xạ cao, tập trung chính xác đến dưới một milimét cho các khối u nhỏ hoặc khó tiếp cận, dùng máy gia tốc tuyến tính gắn trên cánh tay robot theo dõi vị trí khối u và điều chỉnh thời gian thực trong quá trình điều trị — kể cả khối u di động theo nhịp thở — mà không cần khung đầu xâm lấn. Kỹ thuật này thường được dùng tại Ấn Độ cho khối u não, khối u cột sống, ung thư phổi giai đoạn sớm, khối u gan, và các trường hợp khối u nằm gần các cấu trúc quan trọng như thân não, dây thần kinh thị giác hoặc tủy sống, khiến phẫu thuật hoặc xạ trị thông thường rủi ro hơn. Nhờ độ chính xác cao, CyberKnife có thể cung cấp liều xạ hiệu quả chỉ trong một đến năm buổi (xạ phẫu/xạ trị định vị thân), so với nhiều tuần điều trị hàng ngày với xạ trị thông thường — một lợi thế đáng kể cho bệnh nhân đi từ nước ngoài. Lập kế hoạch điều trị dùng hình ảnh MRI và CT độ phân giải cao kết hợp để lập bản đồ khối u chính xác, mỗi buổi điều trị hoàn toàn không xâm lấn và không đau, thường kéo dài 30–90 phút, không cần gây mê. Hầu hết bệnh nhân về nhà ngay trong ngày của mỗi buổi và trở lại hoạt động bình thường ngay sau đó.',
			},
			{
				name: 'Phẫu thuật nạo vét hạch bạch huyết',
				description:
					'Phẫu thuật nạo vét hạch bạch huyết bao gồm nhiều thủ thuật dùng trong điều trị ung thư để loại bỏ, lấy mẫu hoặc đánh giá hạch bạch huyết nhằm xác định ung thư đã lan ra ngoài khối u gốc hay chưa — một yếu tố then chốt để phân giai đoạn chính xác và lập kế hoạch điều trị. Phương pháp phổ biến nhất là sinh thiết hạch gác, trong đó thuốc nhuộm đánh dấu hoặc chất phóng xạ xác định hạch đầu tiên mà khối u có khả năng di căn đến; nếu các hạch này sạch, việc loại bỏ hạch rộng hơn thường có thể tránh được, giảm nguy cơ biến chứng như phù bạch huyết. Khi ung thư được xác nhận hoặc nghi ngờ ở nhiều hạch, nạo vét hạch toàn diện hơn — như nạo vét nách cho ung thư vú hoặc nạo vét cổ cho ung thư đầu-cổ — loại bỏ một nhóm hạch rộng hơn từ vùng bị ảnh hưởng. Các thủ thuật này thường được thực hiện cùng lúc với phẫu thuật khối u chính dưới gây mê toàn thân, thường dùng kỹ thuật xâm lấn tối thiểu hoặc robot để giảm sẹo và tăng tốc hồi phục. Kết quả giải phẫu bệnh từ các hạch được loại bỏ định hướng quyết định có cần hóa trị hoặc xạ trị sau đó hay không, hướng dẫn vật lý trị liệu hoặc phòng ngừa phù bạch huyết được cung cấp như một phần của chăm sóc sau mổ.',
			},
		],
		benefits: [
			'Hội đồng ung bướu đa chuyên khoa cho từng trường hợp',
			'Tiếp cận xạ trị tiên tiến (IMRT, IGRT, tùy chọn xạ trị proton tại các trung tâm chọn lọc)',
			'Chăm sóc toàn diện, từ chẩn đoán đến theo dõi sau điều trị',
			'Cố vấn ung bướu tận tâm hỗ trợ bệnh nhân và gia đình',
		],
		flagshipProcedure: 'Phẫu thuật cắt bỏ khối u',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Vương quốc Anh', waitTime: '2–6 tháng (NHS)', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: 'Thay đổi theo giai đoạn' },
		],
		inclusions: [
			'Xem xét của hội đồng ung bướu đối với báo cáo sinh thiết, chẩn đoán hình ảnh và giải phẫu bệnh hiện có',
			'Chi phí bác sĩ phẫu thuật, gây mê và đội ngũ ung bướu cho ca can thiệp chính',
			'Chi phí phòng mổ và ICU (2 ngày) cộng 6 ngày phòng riêng',
			'Chăm sóc y tế và thuốc hóa trị/hỗ trợ tiêu chuẩn trong thời gian nằm viện',
			'Chi phí xét nghiệm, chẩn đoán hình ảnh và giải phẫu bệnh liên quan đến thủ thuật chính',
			'Hỗ trợ tận tâm từ cố vấn ung bướu cho bệnh nhân và gia đình',
			'Tóm tắt xuất viện với kế hoạch hóa trị/xạ trị tiếp theo bài bản',
		],
		exclusions: [
			'Các chu kỳ hóa trị hoặc buổi xạ trị bổ sung ngoài gói ban đầu',
			'Các xét nghiệm hồ sơ gen/phân tử, trừ khi được yêu cầu cụ thể',
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Liệu pháp nhắm trúng đích hoặc miễn dịch trị liệu, được báo giá riêng do chi phí biến động',
			'Điều trị các tình trạng không liên quan được phát hiện khi đánh giá',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật ung bướu tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói phẫu thuật cắt bỏ khối u tại Ấn Độ bắt đầu từ 6.000 USD, thấp hơn khoảng 90% so với ca can thiệp tương đương tại Mỹ, bao gồm việc xem xét của hội đồng ung bướu, ca can thiệp, thời gian nằm ICU/phòng bệnh và chăm sóc hỗ trợ ban đầu.',
			},
			{
				question: 'Hóa trị và xạ trị được tính giá như thế nào?',
				answer:
					'Các chu kỳ hóa trị và buổi xạ trị (IMRT/IGRT) được báo giá riêng, tùy theo phác đồ cụ thể của bạn, vì các phác đồ khác nhau rất nhiều tùy theo loại và giai đoạn ung thư — hội đồng ung bướu sẽ cung cấp ước tính chi tiết sau khi xem xét báo cáo của bạn.',
			},
			{
				question: 'Trường hợp của tôi sẽ được một đội ngũ chuyên gia xem xét, hay chỉ một bác sĩ?',
				answer:
					'Mỗi trường hợp đều trải qua hội đồng ung bướu đa chuyên khoa — bác sĩ phẫu thuật ung bướu, bác sĩ ung bướu nội khoa và chuyên gia xạ trị — trước khi kế hoạch điều trị được hoàn tất, cùng mô hình được sử dụng tại các trung tâm ung bướu hàng đầu phương Tây.',
			},
			{
				question: 'Tôi sẽ phải ở lại Ấn Độ bao lâu?',
				answer:
					'Bệnh nhân phẫu thuật thường nằm viện 8 ngày, với thời gian lưu trú tổng cộng khuyến nghị khoảng 4 tuần tại Ấn Độ nếu ca can thiệp được tiếp nối bằng hóa trị hoặc xạ trị.',
			},
			{
				question: 'Tôi có thể xin ý kiến thứ hai trước khi quyết định phẫu thuật không?',
				answer:
					'Có. Gửi báo cáo sinh thiết, chẩn đoán hình ảnh và giải phẫu bệnh của bạn để được hội đồng ung bướu xem xét miễn phí và cho ý kiến thứ hai, trước khi bạn quyết định có đi điều trị hay không.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo chẩn đoán của bạn qua biểu mẫu liên hệ hoặc WhatsApp, và điều phối viên ung bướu của chúng tôi sẽ sắp xếp xem xét của hội đồng cùng ước tính minh bạch trong 48 giờ.',
			},
		],
	},

	'cosmetic-surgery': {
		name: 'Phẫu thuật thẩm mỹ và tạo hình',
		shortDescription: 'Các thủ thuật thẩm mỹ và tái tạo được thực hiện bởi các bác sĩ phẫu thuật được chứng nhận quốc tế.',
		overview:
			'Kết hợp các bác sĩ phẫu thuật được chứng nhận với chăm sóc sau phẫu thuật hướng đến hồi phục theo phong cách khách sạn, Ấn Độ đã trở thành điểm đến ưa chuộng cho các thủ thuật thẩm mỹ và tái tạo — với sự riêng tư và kín đáo mà bệnh nhân quốc tế mong đợi.',
		procedures: ['Nâng mũi', 'Hút mỡ', 'Cấy tóc'],
		detailedProcedures: [
			{
				name: 'Nâng mũi (Phẫu thuật mũi)',
				description:
					'Nâng mũi là một thủ thuật phẫu thuật định hình lại xương và sụn của mũi để thay đổi kích thước, hình dạng hoặc tỷ lệ, hoặc để điều chỉnh các vấn đề về hô hấp do lệch vách ngăn hoặc đường mũi hẹp gây ra. Bác sĩ phẫu thuật có thể thao tác qua các đường rạch nhỏ ẩn bên trong lỗ mũi (kỹ thuật kín) hoặc một đường rạch ngoài nhỏ ở đáy mũi (kỹ thuật mở), tùy vào mức độ điều chỉnh cần thiết. Sụn có thể được cắt tỉa, định hình lại hoặc ghép từ nơi khác trong mũi hoặc tai để tạo cấu trúc. Thủ thuật thường được thực hiện dưới gây mê toàn thân hoặc gây tê tại chỗ kèm an thần và mất một đến ba giờ. Ứng viên bao gồm những người không hài lòng với hình dạng hoặc kích thước mũi, người gặp khó khăn về hô hấp, hoặc bệnh nhân cần chỉnh sửa sau phẫu thuật trước đó. Hồi phục bao gồm sưng và bầm tím trong một đến hai tuần, với nẹp mũi được đeo trong vài ngày đầu và kết quả cuối cùng thấy rõ sau vài tháng khi vết sưng giảm dần. Bệnh nhân quốc tế đến Ấn Độ nâng mũi thường lên kế hoạch tư vấn ban đầu, thực hiện thủ thuật và một lần tái khám trước khi tháo nẹp, cho phép hầu hết quá trình lành thương sớm được theo dõi trực tiếp.',
			},
			{
				name: 'Căng da mặt',
				description:
					'Căng da mặt, hay phẫu thuật rhytidectomy, là một thủ thuật phẫu thuật giải quyết tình trạng da chảy xệ, nếp gấp sâu và mất độ sắc nét dọc theo mặt dưới, đường viền hàm và cổ phát triển theo tuổi tác. Qua các đường rạch thường đặt dọc theo chân tóc và quanh tai, bác sĩ phẫu thuật nâng và định vị lại cơ và mô liên kết bên dưới của mặt (lớp SMAS), loại bỏ da thừa và kéo căng lại phần da còn lại theo đường viền mới. Thủ thuật thường kết hợp với căng da cổ hoặc cấy mỡ để giải quyết các thay đổi liên quan. Thủ thuật được thực hiện dưới gây mê toàn thân hoặc gây tê tại chỗ kèm an thần và thường mất ba đến năm giờ. Ứng viên tốt thường có sức khỏe khá tốt với kỳ vọng thực tế về mức độ cải thiện mà việc căng da có thể mang lại, vì nó giải quyết tình trạng chảy xệ chứ không phải nếp nhăn nhỏ hay tổn thương do nắng. Hồi phục bao gồm sưng, bầm tím và căng cứng trong một đến hai tuần, chỉ khâu được cắt trong khoảng thời gian đó và hầu hết bệnh nhân trở lại hoạt động bình thường trong hai đến ba tuần. Vì thủ thuật cần một giai đoạn tái khám trực tiếp để kiểm tra lành thương và cắt chỉ, bệnh nhân đến Ấn Độ căng da mặt thường lên kế hoạch lưu trú khoảng hai tuần.',
			},
			{
				name: 'Căng da mặt không phẫu thuật',
				description:
					'Căng da mặt không phẫu thuật không phải là một thủ thuật đơn lẻ mà là sự kết hợp các phương pháp tiêm và công nghệ năng lượng được sử dụng để nâng và làm tươi mới khuôn mặt mà không cần rạch hay gây mê toàn thân. Tùy vào mối quan tâm của bệnh nhân, kế hoạch điều trị có thể kết hợp chất làm đầy da để phục hồi thể tích ở má và thái dương, tiêm độc tố botulinum để làm mềm các nếp nhăn động, và công nghệ làm săn chắc da như sóng cao tần hoặc siêu âm (ví dụ HIFU) để kích thích collagen và làm săn da chùng. Các buổi điều trị thường được thực hiện tại phòng khám ngoại trú với kem gây tê tại chỗ, hầu hết các phương pháp mất ba mươi phút đến một giờ. Thời gian nghỉ dưỡng gần như không có ngoài đỏ da tạm thời hoặc sưng nhẹ, nên bệnh nhân thường có thể trở lại hoạt động bình thường ngay trong ngày hoặc ngày hôm sau. Phương pháp này phù hợp với bệnh nhân có dấu hiệu lão hóa sớm đến trung bình muốn cải thiện rõ rệt mà không cần phẫu thuật, mặc dù kết quả tinh tế hơn và tạm thời hơn so với căng da phẫu thuật, thường kéo dài từ vài tháng đến vài năm tùy phương pháp điều trị. Vì các buổi điều trị nhanh và có thể lặp lại, một số bệnh nhân kết hợp căng da không phẫu thuật với các thủ thuật khác trong một chuyến đi Ấn Độ, với các lần điều trị duy trì được lên kế hoạch cho chuyến đi sau hoặc qua nhà cung cấp tại địa phương.',
			},
			{
				name: 'Căng da mặt bằng chỉ',
				description:
					'Căng da mặt bằng chỉ là một thủ thuật xâm lấn tối thiểu sử dụng các sợi chỉ phẫu thuật mảnh, tự tiêu, thường làm từ polydioxanone (PDO), để nâng da chảy xệ và kích thích sản sinh collagen mà không cần đường rạch như căng da mặt truyền thống. Các sợi chỉ, một số có gai hoặc nón nhỏ, được đưa vào dưới da bằng kim mỏng hoặc canula và cố định để định vị lại nhẹ nhàng mô ở má, đường viền hàm hoặc chân mày trước khi cắt bỏ phần đầu thừa. Thủ thuật được thực hiện dưới gây tê tại chỗ trong môi trường ngoại trú và thường mất ba mươi đến sáu mươi phút. Trong những tuần sau đó, cơ thể hình thành collagen quanh các sợi chỉ đang tiêu dần, dần dần tăng cường hiệu ứng nâng ban đầu. Phương pháp này phù hợp với bệnh nhân có dấu hiệu chảy xệ sớm chưa sẵn sàng phẫu thuật, kết quả rõ ràng khiêm tốn hơn và ngắn hơn, thường mười hai đến mười tám tháng, so với căng da phẫu thuật. Thời gian nghỉ dưỡng tối thiểu, có một số sưng, bầm tím hoặc cảm giác căng trong vài ngày. Vì hồi phục ngắn, căng da bằng chỉ thường có thể được lên lịch cùng với các điều trị khác trong một chuyến đi đến Ấn Độ, mặc dù bệnh nhân nên thảo luận về thời điểm với bác sĩ phẫu thuật nếu kết hợp với các thủ thuật xâm lấn hơn.',
			},
			{
				name: 'Phẫu thuật mí mắt (Blepharoplasty)',
				description:
					'Phẫu thuật mí mắt là một thủ thuật phẫu thuật loại bỏ hoặc định vị lại da, cơ và mỡ thừa quanh mí mắt trên hoặc dưới để giải quyết tình trạng sụp mí, phù nề hoặc quầng thâm dưới mắt. Trong phẫu thuật mí trên, bác sĩ phẫu thuật rạch một đường dọc theo nếp gấp tự nhiên để loại bỏ mô thừa; trong phẫu thuật mí dưới, đường rạch có thể đặt ngay dưới chân mi hoặc bên trong mí mắt (phương pháp xuyên kết mạc) để tránh sẹo nhìn thấy. Thủ thuật thường được thực hiện dưới gây tê tại chỗ kèm an thần và mất một đến hai giờ tùy vào việc điều trị một hay cả hai mí. Ứng viên bao gồm những người có da mí trên che khuất tầm nhìn, những người khó chịu vì mắt trông mệt mỏi hoặc phù nề, và bệnh nhân muốn có vẻ ngoài tỉnh táo hơn. Hồi phục bao gồm sưng và bầm tím trong một đến hai tuần, chỉ khâu được cắt trong khoảng một tuần và hầu hết bệnh nhân thoải mái ra ngoài trong vòng mười đến mười bốn ngày khi dùng trang điểm hoặc kính râm. Vì mô mí mắt lành tương đối nhanh nhưng vẫn cần kiểm tra chỉ khâu và đánh giá tiến triển, bệnh nhân đến Ấn Độ phẫu thuật mí mắt thường lên kế hoạch lưu trú mười ngày đến hai tuần để hoàn tất thủ thuật và tái khám sớm.',
			},
			{
				name: 'Phẫu thuật tạo hình quanh mắt (Oculoplastic)',
				description:
					'Phẫu thuật tạo hình quanh mắt là một nhánh chuyên khoa của nhãn khoa và phẫu thuật thẩm mỹ điều trị các vấn đề về cấu trúc và chức năng của mí mắt, lệ đạo, hốc mắt và mô xung quanh. Nó bao gồm nhiều thủ thuật, bao gồm sửa chữa mí mắt sụp (ptosis) ảnh hưởng đến thị lực, điều chỉnh mí mắt lệch vị trí như lật mí ngoài hoặc lật mí trong, điều trị tắc lệ đạo, loại bỏ khối u hoặc nang mí mắt kèm tái tạo, sửa chữa gãy xương hốc mắt và tái tạo hốc mắt sau chấn thương hoặc cắt bỏ mắt. Các bác sĩ phẫu thuật được đào tạo cả về nhãn khoa và kỹ thuật phẫu thuật thẩm mỹ thực hiện các thủ thuật này, có thể dưới gây tê tại chỗ hoặc gây mê toàn thân tùy độ phức tạp và vị trí. Ứng viên là bệnh nhân có vấn đề chức năng ảnh hưởng đến thị lực, sự thoải mái của mắt hoặc khả năng nhắm mí, cũng như những người cần tái tạo sau chấn thương, cắt bỏ khối u hoặc phẫu thuật trước đó. Vì nhiều tình trạng này ảnh hưởng đến cách mắt được bảo vệ và khả năng nhắm kín, đánh giá thường bao gồm khám mắt chi tiết cùng với đánh giá phẫu thuật. Hồi phục rất khác nhau tùy thủ thuật, từ vài ngày cho các sửa chữa mí mắt nhỏ đến vài tuần cho tái tạo hốc mắt, các trung tâm tạo hình quanh mắt tại Ấn Độ thường xử lý các ca phức tạp cần phẫu thuật theo từng giai đoạn và hình ảnh theo dõi.',
			},
			{
				name: 'Tiêm Botox',
				description:
					'Botox là thương hiệu nổi tiếng nhất của độc tố botulinum loại A, một loại protein tinh khiết được tiêm với liều lượng nhỏ, chính xác vào các cơ mặt để tạm thời làm giãn các cơn co cơ gây ra nếp nhăn động, chẳng hạn như nếp nhăn cau mày giữa hai lông mày, vết chân chim quanh mắt và nếp nhăn ngang trán. Độc tố hoạt động bằng cách chặn tín hiệu thần kinh đến cơ được điều trị, nên da bên trên trở nên mịn màng trong khi biểu cảm xung quanh vẫn phần lớn tự nhiên nếu liều lượng được tính toán tốt. Điều trị được thực hiện tại phòng khám với kim nhỏ và không cần gây mê ngoài kem gây tê tùy chọn, thường mất mười đến hai mươi phút cho nhiều điểm tiêm. Hiệu quả bắt đầu trong vòng ba đến bảy ngày, đạt đỉnh khoảng hai tuần, và thường kéo dài ba đến bốn tháng trước khi hoạt động cơ dần trở lại, lúc đó cần điều trị lặp lại để duy trì hiệu quả. Botox cũng được sử dụng trong y tế cho các tình trạng như đổ mồ hôi quá mức, đau nửa đầu mãn tính và một số rối loạn co thắt cơ. Hầu như không có thời gian nghỉ dưỡng ngoài đỏ nhẹ hoặc vết bầm nhỏ tại điểm tiêm, khiến đây là lựa chọn bổ sung phổ biến cho bệnh nhân đã đến Ấn Độ cho các điều trị thẩm mỹ hoặc y tế khác.',
			},
			{
				name: 'Phẫu thuật tạo hình tai (Otoplasty)',
				description:
					'Tạo hình tai là một thủ thuật phẫu thuật định hình lại sụn của tai ngoài, phổ biến nhất là để kéo tai vểnh lại gần đầu hơn hoặc điều chỉnh các bất thường về hình dạng hoặc kích thước tai có từ khi sinh ra hoặc do chấn thương. Bác sĩ phẫu thuật thường rạch một đường sau tai, sau đó khía, gấp hoặc khâu sụn vào vị trí tự nhiên hơn trước khi đóng vết rạch để sẹo nếu có được giấu trong nếp gấp tự nhiên. Thủ thuật có thể được thực hiện dưới gây tê tại chỗ kèm an thần ở người lớn hoặc gây mê toàn thân ở trẻ em, thường mất một đến hai giờ cho cả hai tai. Đây là một trong số ít thủ thuật thẩm mỹ thường được thực hiện trên trẻ em, thường là khi sụn tai đã phát triển đủ, thường nhằm giải quyết sự tự ti trước tuổi đi học. Hồi phục bao gồm băng đầu đệm trong vài ngày đầu, sau đó là băng đô nhẹ hơn đeo vào ban đêm trong vài tuần để bảo vệ vị trí mới trong khi lành. Sưng và khó chịu nhẹ giảm trong vòng một đến hai tuần. Các gia đình đưa con đến Ấn Độ tạo hình tai thường lên kế hoạch lưu trú ngắn bao gồm phẫu thuật và lần thay băng đầu tiên.',
			},
			{
				name: 'Cấy tóc',
				description:
					'Cấy tóc di chuyển các nang tóc từ vùng cho, thường là phía sau hoặc hai bên da đầu nơi tóc mọc tự nhiên ít bị rụng, đến các vùng hói rõ rệt. Hai kỹ thuật chính là cấy tóc theo đơn vị nang (FUT), trong đó một dải da đầu được lấy ra và chia thành các mảnh ghép riêng lẻ, và chiết tách đơn vị nang (FUE), trong đó các nang tóc được lấy từng cái một bằng dụng cụ đục nhỏ, để lại sẹo tối thiểu. Các mảnh ghép được đặt vào các đường rạch nhỏ tại vị trí nhận theo góc độ và mật độ tự nhiên của tóc xung quanh để có kết quả trông tự nhiên. Thủ thuật được thực hiện dưới gây tê tại chỗ và, tùy vào số lượng mảnh ghép cần thiết, mất khoảng bốn đến tám giờ, đôi khi chia thành hai buổi. Ứng viên phù hợp là nam và nữ bị rụng tóc theo kiểu hình và có đủ nguồn tóc cho, được đánh giá trước về nguyên nhân gây rụng tóc. Tóc được cấy thường rụng trong vài tuần trước khi mọc lại dần, với sự mọc mới rõ rệt sau sáu đến mười hai tháng. Vì bản thân ca phẫu thuật có thời gian nghỉ dưỡng khiêm tốn, bệnh nhân đến Ấn Độ thường lên kế hoạch lưu trú khoảng một tuần để da đầu ổn định trước khi bay về nước.',
			},
			{
				name: 'Nâng ngực (Augmentation)',
				description:
					'Nâng ngực là một thủ thuật phẫu thuật làm tăng kích thước và thay đổi hình dạng ngực bằng túi độn silicone hoặc nước muối, hoặc trong một số trường hợp là mỡ tự thân của bệnh nhân chuyển từ vùng khác của cơ thể. Bác sĩ phẫu thuật đặt túi độn qua đường rạch, thường quanh quầng vú, trong nếp gấp tự nhiên dưới ngực, hoặc ở nách, định vị túi độn phía trên hoặc dưới cơ ngực tùy giải phẫu và kết quả mong muốn của bệnh nhân. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất một đến hai giờ. Ứng viên bao gồm phụ nữ cảm thấy kích thước ngực không cân đối với vóc dáng, những người muốn phục hồi thể tích đã mất sau khi mang thai hoặc thay đổi cân nặng, và bệnh nhân tái tạo ngực. Hồi phục bao gồm sưng, căng cứng và hạn chế cử động cánh tay trong một đến hai tuần, hầu hết bệnh nhân trở lại hoạt động nhẹ trong thời gian đó và tập thể dục đầy đủ sau bốn đến sáu tuần. Túi độn không được coi là thiết bị trọn đời và có thể cần theo dõi hoặc thay thế sau này. Bệnh nhân đến Ấn Độ nâng ngực thường lên kế hoạch lưu trú mười đến mười bốn ngày để bác sĩ phẫu thuật kiểm tra vết rạch và quá trình lành thương sớm trước khi về nước.',
			},
			{
				name: 'Thu nhỏ ngực',
				description:
					'Phẫu thuật thu nhỏ ngực, hay tạo hình giảm thể tích ngực, loại bỏ mỡ, mô tuyến và da thừa ở ngực để giảm kích thước và trọng lượng ngực, đồng thời định vị lại núm vú và quầng vú cao hơn trên bầu ngực nhỏ hơn. Thủ thuật thường được thực hiện qua kiểu đường rạch hình neo hoặc dọc, bác sĩ phẫu thuật định hình lại mô còn lại để tạo đường viền cân đối trước khi đóng vết rạch. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất hai đến bốn giờ. Ứng viên thường là bệnh nhân gặp các triệu chứng thể chất do ngực quá lớn, chẳng hạn như đau cổ, lưng hoặc vai, kích ứng da dưới nếp gấp ngực, hoặc hạn chế vận động thể chất, cũng như những người muốn cân đối hơn với vóc dáng. Hồi phục bao gồm sưng, bầm tím và đau nhức trong một đến hai tuần, hầu hết bệnh nhân trở lại hoạt động hàng ngày bình thường trong hai tuần và tập thể dục sau bốn đến sáu tuần, khi được bác sĩ phẫu thuật cho phép. Cảm giác ở vùng núm vú có thể bị thay đổi tạm thời hoặc, ít phổ biến hơn, vĩnh viễn. Vì thu nhỏ ngực thường có lợi ích chức năng đã được ghi nhận bên cạnh lợi ích thẩm mỹ, bệnh nhân đến Ấn Độ cho thủ thuật này thường sắp xếp lưu trú hai tuần để cắt chỉ và kiểm tra vết thương.',
			},
			{
				name: 'Nâng ngực chảy xệ (Breast Lift)',
				description:
					'Nâng ngực chảy xệ, hay tạo hình treo ngực (mastopexy), nâng và định hình lại ngực đã chảy xệ do tuổi tác, mang thai, cho con bú hoặc thay đổi cân nặng bằng cách loại bỏ da thừa và định vị lại mô ngực còn lại cùng phức hợp núm vú-quầng vú cao hơn trên ngực. Tùy mức độ chảy xệ, bác sĩ phẫu thuật có thể dùng đường rạch ngắn hơn quanh quầng vú hoặc đường rạch hình neo dài hơn kéo xuống và dọc theo nếp gấp ngực. Khác với nâng ngực bằng túi độn, thủ thuật treo ngực không thêm thể tích, nên bệnh nhân muốn ngực vừa đầy đặn hơn vừa cao hơn có thể kết hợp mastopexy với túi độn trong cùng một ca mổ. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất hai đến ba giờ. Ứng viên tốt là bệnh nhân có mô ngực chảy xệ và độ đàn hồi da đủ, cân nặng tương đối ổn định, vì việc mang thai hoặc thay đổi cân nặng đáng kể trong tương lai có thể ảnh hưởng đến kết quả. Hồi phục bao gồm sưng và hạn chế cử động cánh tay trong một đến hai tuần, hầu hết bệnh nhân trở lại hoạt động nhẹ trong thời gian đó và tập thể dục đầy đủ sau bốn đến sáu tuần. Bệnh nhân đến Ấn Độ nâng ngực chảy xệ thường lên kế hoạch lưu trú khoảng hai tuần để hoàn tất phẫu thuật và tái khám kiểm tra vết rạch.',
			},
			{
				name: 'Hút mỡ',
				description:
					'Hút mỡ là một thủ thuật phẫu thuật tạo hình cơ thể loại bỏ các vùng mỡ cục bộ không đáp ứng với chế độ ăn uống và tập luyện, từ các vùng như bụng, hông, đùi, cánh tay hoặc cằm. Qua các đường rạch nhỏ, bác sĩ phẫu thuật đưa vào một canula mỏng kết nối với thiết bị hút và di chuyển qua lớp mỡ để phá vỡ và loại bỏ tế bào mỡ, với các kỹ thuật như hút mỡ tumescent, hỗ trợ siêu âm hoặc hỗ trợ laser được sử dụng để giúp loại bỏ mỡ dễ dàng hơn và hỗ trợ co da. Thủ thuật được thực hiện dưới gây mê toàn thân hoặc gây tê tại chỗ kèm an thần, tùy vùng và mức độ điều trị, thường mất một đến ba giờ. Ứng viên tốt là người gần đạt cân nặng mục tiêu, có độ đàn hồi da tốt và kỳ vọng thực tế, vì hút mỡ là thủ thuật tạo hình chứ không phải điều trị giảm cân. Hồi phục bao gồm sưng, bầm tím và mặc đồ nén trong vài tuần, hầu hết bệnh nhân trở lại hoạt động nhẹ trong vòng một tuần và đường nét cuối cùng thấy rõ sau ba đến sáu tháng khi hết sưng. Bệnh nhân đến Ấn Độ hút mỡ thường lên kế hoạch lưu trú khoảng mười ngày để vừa đồ nén, tái khám sớm và theo dõi quá trình lành thương ban đầu.',
			},
			{
				name: 'Tạo hình thành bụng (Tummy Tuck)',
				description:
					'Tạo hình thành bụng, hay phẫu thuật tummy tuck, loại bỏ da và mỡ thừa ở bụng và làm săn chắc các cơ bụng bên dưới, có thể bị kéo giãn hoặc tách ra (diastasis recti) sau khi mang thai hoặc giảm cân đáng kể. Qua đường rạch ngang thấp ở bụng, bác sĩ phẫu thuật sửa chữa lớp cơ bằng chỉ khâu bên trong, loại bỏ mô thừa và định vị lại rốn trước khi đóng vết rạch, đôi khi kết hợp thủ thuật với hút mỡ để tạo đường nét thêm. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất hai đến bốn giờ. Ứng viên thường có cân nặng ổn định, khỏe mạnh với da bụng chùng hoặc cơ tách rời không cải thiện khi tập luyện, và không có kế hoạch mang thai trong tương lai, vì mang thai sau đó có thể làm mất tác dụng sửa chữa cơ. Hồi phục bao gồm vài tuần hạn chế hoạt động, mặc đồ nén để hỗ trợ lành thương, ống dẫn lưu thường được tháo trong tuần đầu, hầu hết bệnh nhân trở lại hoạt động bình thường, không gắng sức trong bốn đến sáu tuần. Vì hồi phục từ sửa chữa cơ bụng mất nhiều thời gian hơn nhiều thủ thuật tạo hình cơ thể khác, bệnh nhân đến Ấn Độ tạo hình thành bụng thường lên kế hoạch lưu trú hai đến ba tuần để ống dẫn lưu được tháo và quá trình lành thương được theo dõi trước khi bay.',
			},
			{
				name: 'Nâng mông kiểu Brazil (BBL)',
				description:
					'Nâng mông kiểu Brazil (BBL) sử dụng mỡ tự thân của bệnh nhân, thu được qua hút mỡ từ các vùng như bụng, hông hoặc đùi, để tăng thể tích và tạo hình cho mông. Mỡ thu được được xử lý để tách các tế bào mỡ còn sống trước khi được tiêm cẩn thận với nhiều lượng nhỏ vào các lớp khác nhau của mông để tạo đường nét tròn đầy hơn, trong khi các vùng cho cũng được hưởng lợi từ việc tạo hình do hút mỡ. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất hai đến bốn giờ tùy lượng mỡ được thu và ghép. Ứng viên là bệnh nhân có đủ mỡ nguồn để thu thập và muốn hình dạng mông đầy đặn hơn mà không cần túi độn. Vì mỡ ghép cần nguồn cung cấp máu ổn định để tồn tại, bệnh nhân thường được yêu cầu tránh ngồi trực tiếp lên mông trong một thời gian sau phẫu thuật, sử dụng gối đặc biệt hoặc nằm sấp thay thế, và một phần mỡ ghép sẽ tự nhiên bị hấp thụ lại trong những tháng sau đó. Hồi phục bao gồm mặc đồ nén trong vài tuần và tránh tập thể dục gắng sức trong khoảng sáu tuần. Bệnh nhân đến Ấn Độ làm BBL thường lên kế hoạch lưu trú khoảng hai tuần để hồi phục sớm và tái khám trước khi về nước.',
			},
			{
				name: 'Nâng mông bằng túi độn',
				description:
					'Nâng mông bằng túi độn tăng kích thước mông và cải thiện đường nét bằng túi độn silicone hoặc ghép mỡ, được chọn dựa trên lượng mỡ nguồn có sẵn, giải phẫu và kết quả mong muốn của bệnh nhân. Khi sử dụng túi độn, bác sĩ phẫu thuật đặt chúng qua một đường rạch nhỏ, thường trong nếp gấp mông, định vị bên trong hoặc dưới cơ mông để có kết quả ổn định, cảm giác tự nhiên. Khi ưu tiên ghép mỡ, mỡ được thu từ vùng khác bằng hút mỡ và tiêm vào mông, cũng có lợi ích tạo hình cho vùng cho. Nâng mông bằng túi độn được thực hiện dưới gây mê toàn thân và thường mất khoảng hai giờ, trong khi các thủ thuật ghép mỡ mất nhiều thời gian hơn tùy lượng chuyển. Ứng viên cho túi độn thường là bệnh nhân có ít mỡ nguồn, trong khi những người có đủ mỡ ở nơi khác có thể thích ghép mỡ để tránh túi độn ngoại lai. Hồi phục cho cả hai phương pháp đều cần tránh áp lực trực tiếp lên mông trong vài tuần, khuyến nghị dùng gối chuyên dụng hoặc thay đổi tư thế ngủ, cùng với đồ nén và trở lại tập thể dục dần dần trong bốn đến sáu tuần. Bệnh nhân cân nhắc nâng mông tại Ấn Độ thường thảo luận cả hai lựa chọn túi độn và ghép mỡ với bác sĩ phẫu thuật trong buổi tư vấn để xác định lựa chọn phù hợp hơn với vóc dáng của mình.',
			},
			{
				name: 'Nâng cánh tay',
				description:
					'Nâng cánh tay, hay phẫu thuật brachioplasty, loại bỏ da và mỡ thừa ở cánh tay trên và làm săn chắc mô bên dưới để tạo đường nét mịn màng, săn chắc hơn, giải quyết tình trạng da chùng, treo lủng lẳng có thể phát triển sau khi giảm cân đáng kể hoặc do tuổi tác. Bác sĩ phẫu thuật thường rạch một đường ở mặt trong hoặc sau cánh tay trên, kéo dài từ khuỷu tay đến nách tùy lượng da cần loại bỏ, và có thể kết hợp thủ thuật với hút mỡ để tinh chỉnh đường nét thêm. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất khoảng hai giờ. Ứng viên là bệnh nhân có da cánh tay trên chùng, chảy xệ không cải thiện khi tập luyện, thường sau khi giảm cân nhiều, có cân nặng ổn định và sức khỏe tổng thể tốt. Hồi phục bao gồm mặc đồ nén trong vài tuần, sưng và hạn chế cử động cánh tay trong một đến hai tuần đầu và trở lại hoạt động bình thường dần dần trong bốn đến sáu tuần. Vì sẹo kết quả chạy dọc theo chiều dài mặt trong cánh tay, bệnh nhân được tư vấn về chăm sóc sẹo trong quá trình hồi phục. Bệnh nhân đến Ấn Độ nâng cánh tay thường lên kế hoạch lưu trú khoảng hai tuần để cắt chỉ và theo dõi vết thương.',
			},
			{
				name: 'Nâng đùi',
				description:
					'Nâng đùi, hay phẫu thuật thighplasty, loại bỏ da và mỡ thừa ở đùi trong hoặc ngoài và làm săn chắc mô bên dưới để tạo đường nét mịn màng hơn, thường dành cho bệnh nhân còn lại da chùng, chảy xệ sau khi giảm cân đáng kể. Tùy vùng và lượng điều chỉnh cần thiết, bác sĩ phẫu thuật có thể dùng đường rạch ở nếp bẹn cho nâng đùi trong, hoặc đường rạch kéo dài xuống đùi ngoài cho việc loại bỏ da nhiều hơn, đôi khi kết hợp với hút mỡ. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất hai đến ba giờ. Ứng viên có cân nặng ổn định với da đùi chùng không đáp ứng với tập luyện, và hiểu rằng đánh đổi cho da săn chắc hơn là một đường sẹo nhìn thấy dọc theo đường rạch. Hồi phục bao gồm mặc đồ nén, tránh hoạt động gắng sức và hạn chế đứng hoặc đi bộ kéo dài trong một đến hai tuần đầu, trở lại hoạt động bình thường dần dần trong bốn đến sáu tuần. Vì các đường rạch nâng đùi nằm ở vùng ma sát và cử động, chăm sóc vết thương cẩn thận trong giai đoạn lành thương sớm là quan trọng. Bệnh nhân đến Ấn Độ nâng đùi thường lên kế hoạch lưu trú khoảng hai tuần để bác sĩ phẫu thuật theo dõi quá trình lành thương.',
			},
			{
				name: 'Thu nhỏ môi lớn/môi bé (Labiaplasty)',
				description:
					'Labiaplasty là một thủ thuật phẫu thuật thu nhỏ hoặc định hình lại môi bé (các nếp gấp bên trong của âm hộ), và ít phổ biến hơn là môi lớn, để giải quyết sự khó chịu hoặc tự ti liên quan đến kích thước hoặc sự không đối xứng của chúng. Sử dụng kỹ thuật cắt tỉa, loại bỏ mô thừa dọc theo mép, hoặc kỹ thuật hình nêm, loại bỏ một phần hình chữ V trong khi giữ nguyên mép tự nhiên, bác sĩ phẫu thuật định hình lại mô và đóng vết rạch bằng chỉ khâu tự tiêu. Thủ thuật thường được thực hiện dưới gây tê tại chỗ kèm an thần hoặc gây mê toàn thân và mất khoảng một đến hai giờ. Ứng viên bao gồm bệnh nhân gặp khó chịu thể chất do môi lớn hoặc không đều, chẳng hạn như cọ xát hoặc đau khi tập luyện, cũng như những người muốn thay đổi vì sự thoải mái cá nhân. Hồi phục bao gồm sưng và đau nhức trong một đến hai tuần, bệnh nhân được khuyên tránh tập luyện gắng sức, quần áo bó sát và quan hệ tình dục trong khoảng bốn đến sáu tuần trong khi mô lành hoàn toàn. Vì thủ thuật nhạy cảm và hồi phục được hưởng lợi từ môi trường yên tĩnh, riêng tư, bệnh nhân đến Ấn Độ làm labiaplasty thường sắp xếp lưu trú kín đáo khoảng mười ngày đến hai tuần để tái khám trước khi về nước.',
			},
			{
				name: 'Phẫu thuật xóa sẹo',
				description:
					'Phẫu thuật xóa sẹo bao gồm nhiều kỹ thuật phẫu thuật được sử dụng để cải thiện ngoại hình của sẹo do chấn thương, bỏng, mụn trứng cá hoặc phẫu thuật trước đó để lại, vì không có phương pháp nào có thể xóa sẹo hoàn toàn nhưng nhiều phương pháp có thể làm phẳng, hẹp hơn hoặc ít rõ ràng hơn. Tùy loại sẹo, các lựa chọn bao gồm chỉnh sửa sẹo, trong đó sẹo cũ được phẫu thuật loại bỏ và vết thương được đóng lại bằng kỹ thuật chính xác hơn để khuyến khích lành thương tinh tế hơn; ghép da hoặc phẫu thuật vạt da cho các vùng sẹo lớn hơn; và kỹ thuật Z-plasty hoặc W-plasty, định vị lại sẹo dọc theo đường nét da tự nhiên để làm cho nó ít gây chú ý về mặt thị giác hơn. Các trường hợp đơn giản hơn có thể được xử lý bằng tiêm steroid, tái tạo bề mặt da bằng laser hoặc lăn kim thay vì phẫu thuật. Loại gây mê sử dụng phụ thuộc vào kích thước, độ sâu và vị trí của sẹo, từ gây tê tại chỗ cho chỉnh sửa nhỏ đến gây mê toàn thân cho ghép da. Ứng viên là bệnh nhân có sẹo gây hạn chế chức năng, chẳng hạn như căng cứng giới hạn cử động, hoặc lo ngại rõ rệt về mặt thẩm mỹ. Hồi phục thay đổi từ vài ngày cho các chỉnh sửa nhỏ đến vài tuần cho ghép da, kết quả cuối cùng thấy rõ sau vài tháng khi sẹo mới trưởng thành. Bệnh nhân đến Ấn Độ chỉnh sửa sẹo thường được đánh giá sẹo trong buổi tư vấn để xác định kỹ thuật phù hợp nhất trước khi lên lịch phẫu thuật.',
			},
		],
		benefits: [
			'Bác sĩ phẫu thuật tạo hình và tái tạo được chứng nhận',
			'Phòng hồi phục riêng tư, kín đáo, tách biệt với khu bệnh nhân chung của bệnh viện',
			'Kỹ thuật hiện đại, bao gồm cấy tóc FUE và hút mỡ VASER',
			'Tư vấn đầy đủ trước/sau với hình ảnh 3D tại các phòng khám chọn lọc',
		],
		flagshipProcedure: 'Nâng mũi',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '2–4 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Vương quốc Anh', waitTime: '3–6 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Đức', waitTime: '2–4 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Thái Lan', waitTime: '1–2 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Ấn Độ', waitTime: '3–7 ngày', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
		],
		inclusions: [
			'Tư vấn với hình ảnh 3D và lập kế hoạch trước phẫu thuật',
			'Chi phí bác sĩ phẫu thuật cho thủ thuật',
			'Chi phí phòng mổ và gây mê',
			'Một đêm tại phòng hồi phục riêng',
			'Băng gạc sau phẫu thuật, đồ nén y tế và buổi tái khám đầu tiên',
			'Thuốc tiêu chuẩn trong thời gian lưu trú hồi phục',
		],
		exclusions: [
			'Các thủ thuật kết hợp (vd: nâng mũi và độn cằm), nếu không được báo giá cùng nhau',
			'Thời gian hồi phục vượt quá một đêm, hoặc chăm sóc sau phẫu thuật kéo dài theo phong cách khách sạn',
			'Phẫu thuật chỉnh sửa thẩm mỹ sau giai đoạn lành thương ban đầu',
			'Thuốc mang về nhà ngoài bộ thuốc xuất viện tiêu chuẩn',
			'Đồ nén hoặc sản phẩm chăm sóc sẹo ngoài phần được cung cấp khi xuất viện',
		],
		faqs: [
			{
				question: 'Nâng mũi tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Nâng mũi tại Ấn Độ bắt đầu từ 2.000 USD, thấp hơn khoảng 75–85% so với Mỹ hoặc Anh, bao gồm tư vấn, can thiệp, gây mê và một đêm hồi phục riêng.',
			},
			{
				question: 'Các bác sĩ phẫu thuật có được đào tạo quốc tế không?',
				answer:
					'Có, các bác sĩ phẫu thuật thẩm mỹ đối tác của chúng tôi đều được chứng nhận và nhiều người đã được đào tạo thêm hoặc thực tập chuyên sâu tại Mỹ, Anh hoặc châu Âu về phẫu thuật thẩm mỹ và tái tạo.',
			},
			{
				question: 'Mức độ riêng tư và kín đáo được đảm bảo như thế nào?',
				answer:
					'Bệnh nhân hồi phục tại các phòng riêng, tách biệt với khu bệnh nhân chung của bệnh viện, và mọi buổi tư vấn cùng hồ sơ đều được xử lý với tính bảo mật nghiêm ngặt.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết các thủ thuật thẩm mỹ cần khoảng 1–2 tuần tại Ấn Độ cho ca can thiệp và tái khám ban đầu, mặc dù điều này thay đổi tùy theo thủ thuật — bác sĩ phẫu thuật sẽ xác nhận lịch trình chính xác trong buổi tư vấn.',
			},
			{
				question: 'Tôi có thể kết hợp nhiều thủ thuật trong một chuyến đi không?',
				answer:
					'Có, nhiều bệnh nhân kết hợp các thủ thuật như nâng mũi với hút mỡ trong một chuyến đi; bác sĩ phẫu thuật sẽ tư vấn những gì có thể thực hiện an toàn cùng nhau, tùy theo tình trạng sức khỏe và nhu cầu hồi phục của bạn.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ mục tiêu và hình ảnh của bạn qua biểu mẫu liên hệ, đội ngũ của chúng tôi sẽ sắp xếp buổi tư vấn riêng với hình ảnh 3D và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	fertility: {
		name: 'Điều trị hiếm muộn',
		shortDescription: 'Thụ tinh trong ống nghiệm và chăm sóc sinh sản với tỷ lệ thành công cao cùng phác đồ cá nhân hóa.',
		overview:
			'Các phòng khám hiếm muộn tại Ấn Độ báo cáo tỷ lệ thành công tương đương với các trung tâm IVF hàng đầu thế giới, với phác đồ nội tiết cá nhân hóa, phòng lab phôi học riêng và không có tình trạng chờ đợi nhiều tháng như thường thấy ở châu Âu và Bắc Mỹ.',
		procedures: ['Thụ tinh trong ống nghiệm (IVF)', 'Bơm tinh trùng vào buồng tử cung (IUI)', 'Đông lạnh trứng'],
		detailedProcedures: [
			{
				name: 'Thụ tinh trong ống nghiệm (IVF)',
				description:
					'Thụ tinh trong ống nghiệm là phương pháp điều trị hiếm muộn trong đó trứng được lấy từ buồng trứng sau một đợt kích thích nội tiết và kết hợp với tinh trùng trong đĩa thí nghiệm để thụ tinh bên ngoài cơ thể. Phôi hình thành được nuôi cấy vài ngày, theo dõi quá trình phát triển, sau đó một hoặc nhiều phôi được chuyển vào tử cung, các phôi khả thi còn lại thường được đông lạnh để sử dụng sau. Quá trình bao gồm một đợt dùng thuốc nội tiết dạng tiêm ban đầu để kích thích nhiều trứng trưởng thành, theo dõi qua xét nghiệm máu và siêu âm, tiếp theo là thủ thuật lấy trứng nhỏ dưới an thần, thụ tinh trong lab, nuôi cấy phôi và cuối cùng chuyển phôi, không cần gây mê. IVF được khuyến nghị cho nhiều nguyên nhân hiếm muộn, bao gồm tắc hoặc tổn thương vòi trứng, rối loạn rụng trứng, vô sinh nam, hiếm muộn không rõ nguyên nhân, hoặc sau khi các phương pháp khác như IUI không thành công. Một chu kỳ đầy đủ từ khi bắt đầu kích thích đến chuyển phôi thường kéo dài khoảng hai đến ba tuần, tiếp theo là xét nghiệm thai khoảng hai tuần sau chuyển phôi. Bệnh nhân đi Ấn Độ để làm IVF thường lên kế hoạch lưu trú quanh khung thời gian kích thích-đến-chuyển phôi này, với các phòng khám sắp xếp thời điểm chu kỳ từ trước dựa trên kết quả xét nghiệm ban đầu của bệnh nhân.',
			},
			{
				name: 'Tiêm tinh trùng vào bào tương trứng (ICSI)',
				description:
					'Tiêm tinh trùng vào bào tương trứng, hay ICSI, là kỹ thuật phòng lab chuyên biệt dùng cùng với IVF, trong đó một tinh trùng duy nhất được chọn và tiêm trực tiếp vào trung tâm của một trứng trưởng thành bằng kim thủy tinh mảnh, thay vì để quá trình thụ tinh diễn ra tự nhiên trong đĩa. Kỹ thuật này vượt qua các rào cản có thể ngăn tinh trùng tự xâm nhập vào trứng. ICSI theo cùng quy trình kích thích buồng trứng và lấy trứng như IVF thông thường, khác biệt chỉ xảy ra ở giai đoạn thụ tinh trong lab; phôi hình thành sau đó được nuôi cấy và chuyển theo cùng phác đồ. ICSI chủ yếu được khuyến nghị cho vô sinh nam, bao gồm số lượng tinh trùng thấp, khả năng di động kém, hình dạng bất thường, hoặc khi tinh trùng được lấy qua phẫu thuật thay vì xuất tinh tự nhiên, cũng như các trường hợp thụ tinh thất bại trước đó với IVF tiêu chuẩn. Kỹ thuật này không thay đổi lịch trình kích thích, lấy trứng hoặc chuyển phôi, nên độ dài chu kỳ tổng thể tương tự IVF tiêu chuẩn, thường khoảng hai đến ba tuần từ kích thích đến chuyển phôi. Vì kỹ thuật không đòi hỏi thêm thủ thuật nào từ phía bệnh nhân ngoài IVF tiêu chuẩn, bệnh nhân đi Ấn Độ làm ICSI thường theo cùng cấu trúc chuyến thăm như một chu kỳ IVF, được sắp xếp quanh ngày kích thích và lấy trứng.',
			},
			{
				name: 'Bơm tinh trùng vào buồng tử cung (IUI)',
				description:
					'Bơm tinh trùng vào buồng tử cung là phương pháp điều trị hiếm muộn trong đó tinh trùng đã được rửa và cô đặc đặc biệt được đưa trực tiếp vào tử cung vào khoảng thời gian rụng trứng, rút ngắn quãng đường tinh trùng cần di chuyển và tăng nồng độ tinh trùng khỏe mạnh gần trứng. Chu kỳ có thể tự nhiên hoặc được hỗ trợ bằng thuốc uống hoặc tiêm để khuyến khích giải phóng một hoặc vài trứng đúng thời điểm, rụng trứng được theo dõi qua xét nghiệm máu và siêu âm để xác định ngày tối ưu cho bơm tinh trùng. Bản thân thủ thuật nhanh chóng và nhìn chung không đau, dùng một ống thông mỏng luồn qua cổ tử cung, không cần gây mê hay thời gian nghỉ dưỡng đáng kể, bệnh nhân thường có thể trở lại hoạt động bình thường ngay sau đó. IUI thường được khuyến nghị là điều trị bước đầu cho vô sinh nam nhẹ, hiếm muộn không rõ nguyên nhân, rối loạn rụng trứng, hoặc cho phụ nữ độc thân hay các cặp đồng giới dùng tinh trùng hiến, và thường được thử trước khi chuyển sang IVF. Một chu kỳ thường kéo dài khoảng hai tuần từ khi bắt đầu theo dõi đến khi bơm tinh trùng, xét nghiệm thai khoảng hai tuần sau đó. Vì theo dõi và bơm tinh trùng diễn ra trong khung thời gian khá ngắn, IUI là một trong những phương pháp điều trị hiếm muộn tiết kiệm thời gian hơn khi đi điều trị tại Ấn Độ.',
			},
			{
				name: 'Bơm tinh trùng vào cổ tử cung (ICI)',
				description:
					'Bơm tinh trùng vào cổ tử cung là hình thức đơn giản hơn của thụ tinh nhân tạo, trong đó tinh trùng, tươi hoặc đã đông lạnh trước đó, được đặt trực tiếp tại lối vào cổ tử cung bằng ống tiêm hoặc mũ cổ tử cung chuyên dụng, thay vì được xử lý và tiêm vào tử cung như IUI. Vì tinh trùng được đặt gần nhưng ở bên ngoài tử cung, không cần phải rửa hoặc chuẩn bị đặc biệt trước, khiến thủ thuật ít xâm lấn hơn và thường có chi phí thấp hơn các kỹ thuật dựa trên tử cung. Thủ thuật có thể được định thời theo chu kỳ rụng trứng tự nhiên theo dõi bằng bộ dự đoán rụng trứng hoặc siêu âm, chỉ mất vài phút, không cần gây mê và thời gian hồi phục tối thiểu. ICI thường được các cá nhân hoặc cặp đôi dùng tinh trùng hiến lựa chọn, những người có vấn đề sinh sản nhẹ, hoặc bệnh nhân muốn chọn phương án ít xâm lấn nhất trước khi cân nhắc IUI hoặc IVF, dù tỷ lệ thành công mỗi chu kỳ thường thấp hơn các kỹ thuật trong tử cung vì ít tinh trùng đến được tử cung hơn. Bệnh nhân thường trải qua vài chu kỳ theo dõi trước khi đánh giá có nên tiếp tục với ICI hay chuyển sang điều trị can thiệp sâu hơn. Vì thủ thuật cần ít chuẩn bị, ICI thường có thể được sắp xếp với một chuyến thăm ngắn, linh hoạt đến phòng khám hiếm muộn tại Ấn Độ.',
			},
			{
				name: 'Thụ tinh nhân tạo',
				description:
					'Thụ tinh nhân tạo là thuật ngữ chung cho các thủ thuật hiếm muộn trong đó tinh trùng được đưa vào đường sinh dục nữ bằng phương tiện khác ngoài giao hợp, phổ biến nhất là bơm vào buồng tử cung (IUI), nơi tinh trùng đã chuẩn bị được tiêm vào tử cung, hoặc bơm vào cổ tử cung (ICI), nơi tinh trùng được đặt tại cổ tử cung. Tinh trùng sử dụng có thể từ bạn đời hoặc từ người hiến đã được sàng lọc, chu kỳ thường được định thời trùng với rụng trứng, theo dõi qua thân nhiệt cơ bản, bộ dự đoán rụng trứng hoặc siêu âm lâm sàng, có hoặc không dùng thuốc kích thích rụng trứng tùy tiền sử bệnh nhân. Bản thân thủ thuật ngắn, thực hiện tại phòng khám không cần gây mê, gây khó chịu tối thiểu và không có thời gian nghỉ dưỡng đáng kể, cho phép bệnh nhân trở lại hoạt động bình thường ngay lập tức. Thụ tinh nhân tạo thường được khuyến nghị cho vấn đề sinh sản nhẹ, hiếm muộn không rõ nguyên nhân, dùng tinh trùng hiến bởi bệnh nhân độc thân hoặc cặp đồng giới, hoặc như bước đầu trước khi cân nhắc các điều trị sâu hơn như IVF. Vì mỗi chu kỳ phụ thuộc vào định thời rụng trứng chính xác, bệnh nhân có thể cần thử nhiều lần trước khi thụ thai. Tính chất ngắn gọn, ít can thiệp khiến thụ tinh nhân tạo là điều trị mà bệnh nhân quốc tế thường có thể hoàn thành trong một chuyến thăm ngắn đến phòng khám hiếm muộn tại Ấn Độ.',
			},
			{
				name: 'IVF dùng trứng hiến',
				description:
					'IVF dùng trứng hiến là hình thức thụ tinh trong ống nghiệm sử dụng trứng lấy từ người hiến đã sàng lọc thay vì từ chính người mẹ dự định, thụ tinh với tinh trùng của bạn đời hoặc người hiến trong lab trước khi phôi hình thành được chuyển vào tử cung của người nhận. Người hiến trải qua quy trình kích thích nội tiết và lấy trứng tiêu chuẩn, trong khi niêm mạc tử cung của người nhận được chuẩn bị bằng thuốc nội tiết, định thời để đồng bộ với chu kỳ của người hiến hoặc với trứng/phôi hiến đông lạnh. Phương pháp này được khuyến nghị cho phụ nữ có dự trữ buồng trứng suy giảm, suy buồng trứng sớm, chất lượng trứng kém liên quan đến tuổi tác hoặc tiền sử bệnh, các chu kỳ IVF thất bại trước đó do chất lượng trứng, hoặc các bệnh lý di truyền khiến việc dùng trứng của chính mình không khuyến khích. Người hiến thường được sàng lọc tiền sử bệnh, bệnh truyền nhiễm và bệnh lý di truyền trước khi được ghép đôi hoặc chọn từ chương trình hiến tặng. Vì người nhận không cần lấy trứng, phần quy trình của họ tương đối ngắn, chủ yếu liên quan đến chuẩn bị niêm mạc và bản thân thủ thuật chuyển phôi, không cần gây mê. Bệnh nhân đi Ấn Độ làm IVF dùng trứng hiến thường phối hợp trước với phòng khám về ghép đôi người hiến và đồng bộ chu kỳ trước khi lên kế hoạch thời điểm chuyến thăm quanh việc chuyển phôi.',
			},
			{
				name: 'IVF kết hợp chọc hút tinh trùng từ tinh hoàn (TESA)',
				description:
					'IVF kết hợp TESA kết hợp thụ tinh trong ống nghiệm tiêu chuẩn với chọc hút tinh trùng từ tinh hoàn, một thủ thuật nhỏ dùng để lấy tinh trùng trực tiếp từ tinh hoàn khi không có tinh trùng trong tinh dịch xuất ra, tình trạng gọi là vô tinh. Dưới gây tê tại chỗ, một kim mảnh được đưa vào tinh hoàn để hút một mẫu mô hoặc dịch nhỏ chứa tinh trùng, sau đó được kiểm tra trong lab để xác định các tế bào tinh trùng còn khả năng sử dụng cho thụ tinh. Vì tinh trùng lấy theo cách này thường hạn chế về số lượng, nó thường được kết hợp với ICSI, trong đó một tinh trùng duy nhất được tiêm trực tiếp vào mỗi trứng trưởng thành, thay vì thụ tinh thông thường trong đĩa. Về phía bạn đời nữ, quy trình theo con đường IVF thông thường gồm kích thích buồng trứng, theo dõi và lấy trứng, định thời trùng với thủ thuật TESA để có tinh trùng và trứng tươi cùng lúc, dù tinh trùng cũng có thể được đông lạnh trước. Phương pháp này dùng cho nam giới bị vô tinh do tắc nghẽn hoặc không do tắc nghẽn, nơi quá trình sinh tinh vẫn tiếp diễn trong tinh hoàn dù đường dẫn đến xuất tinh bị thiếu hoặc tắc. Bệnh nhân đi Ấn Độ làm IVF kết hợp TESA thường lên kế hoạch chuyến thăm quanh lịch trình kết hợp của kích thích buồng trứng và thủ thuật lấy tinh trùng.',
			},
			{
				name: 'Điều trị hiếm muộn ở phụ nữ',
				description:
					'Điều trị hiếm muộn ở phụ nữ bắt đầu bằng đánh giá chẩn đoán để xác định nguyên nhân nền, có thể gồm xét nghiệm máu đánh giá nồng độ nội tiết, siêu âm đánh giá buồng trứng và tử cung, và chẩn đoán hình ảnh như chụp tử cung-vòi trứng để kiểm tra vòi trứng có thông hay không. Tùy kết quả, điều trị có thể từ thuốc gây hoặc điều hòa rụng trứng, đến phẫu thuật chỉnh sửa các vấn đề cấu trúc như u xơ, polyp hoặc lạc nội mạc tử cung, đến các kỹ thuật hỗ trợ sinh sản như IUI hoặc IVF khi các phương pháp khác không thành công hoặc không phù hợp. Các nguyên nhân thường gặp bao gồm rối loạn rụng trứng như hội chứng buồng trứng đa nang, tắc hoặc tổn thương vòi trứng, lạc nội mạc tử cung, bất thường tử cung và suy giảm số lượng hoặc chất lượng trứng liên quan tuổi tác, điều trị được cá nhân hóa theo chẩn đoán cụ thể thay vì theo một phác đồ duy nhất. Nhiều trường hợp áp dụng phương pháp theo từng bước, bắt đầu từ lựa chọn ít xâm lấn phù hợp nhất và tiến triển nếu cần. Vì đánh giá kỹ lưỡng định hướng kế hoạch điều trị, bệnh nhân đi Ấn Độ điều trị hiếm muộn thường gửi kết quả xét nghiệm và báo cáo trước đó trước chuyến thăm để bác sĩ chuyên khoa có thể vạch ra hướng điều trị khả thi và thời gian lưu trú dự kiến trước khi đi.',
			},
			{
				name: 'Điều trị hiếm muộn ở nam giới',
				description:
					'Điều trị hiếm muộn ở nam giới bắt đầu bằng phân tích tinh dịch để đánh giá số lượng, khả năng di động và hình thái tinh trùng, cùng xét nghiệm máu nội tiết và, khi cần, khám lâm sàng hoặc siêu âm bìu để kiểm tra các vấn đề cấu trúc như giãn tĩnh mạch thừng tinh. Tùy nguyên nhân xác định, điều trị có thể gồm thay đổi lối sống và quản lý y tế để cải thiện các chỉ số tinh trùng, thuốc điều chỉnh mất cân bằng nội tiết, phẫu thuật sửa giãn tĩnh mạch thừng tinh hoặc tắc nghẽn đường sinh dục, hoặc kỹ thuật lấy tinh trùng bằng phẫu thuật như TESA hoặc TESE cho nam giới sản xuất rất ít hoặc không có tinh trùng trong tinh dịch. Khi khả năng thụ thai tự nhiên khó xảy ra, tinh trùng lấy được hoặc xuất tinh có thể dùng với IUI, IVF hoặc ICSI tùy chất lượng và số lượng tinh trùng. Các nguyên nhân được xử lý từ số lượng tinh trùng thấp, khả năng di động kém, đến tắc nghẽn cấu trúc, rối loạn nội tiết và yếu tố di truyền ảnh hưởng đến sinh tinh. Nhiều đánh giá và thủ thuật nhỏ này có thể hoàn thành tương đối nhanh so với chu kỳ điều trị của bạn đời nữ. Bệnh nhân đi Ấn Độ đánh giá vô sinh nam thường mang theo kết quả phân tích tinh dịch và nội tiết trước đó để bác sĩ chuyên khoa có thể tư vấn trước chuyến thăm về các xét nghiệm hoặc thủ thuật tiếp theo có thể cần.',
			},
			{
				name: 'Điều trị vô tinh',
				description:
					'Vô tinh là tình trạng hoàn toàn không có tinh trùng trong tinh dịch xuất ra, điều trị tùy thuộc nguyên nhân là do tắc nghẽn, nghĩa là tinh trùng vẫn được sản xuất bình thường nhưng bị chặn không đến được tinh dịch, hay không do tắc nghẽn, nghĩa là bản thân quá trình sinh tinh bị suy giảm. Chẩn đoán gồm xét nghiệm máu nội tiết, phân tích tinh dịch, siêu âm bìu và đôi khi xét nghiệm di truyền để phân biệt hai loại và xác định nguyên nhân nền, như thắt ống dẫn tinh trước đó, bất sản bẩm sinh ống dẫn tinh, nhiễm trùng, hoặc rối loạn nội tiết hay tinh hoàn. Trường hợp tắc nghẽn có thể được điều trị bằng phẫu thuật nối lại hoặc vượt qua chỗ tắc, như phẫu thuật nối lại ống dẫn tinh, hoặc lấy tinh trùng trực tiếp từ tinh hoàn hay mào tinh bằng các thủ thuật nhỏ như TESA, PESA hoặc micro-TESE. Trường hợp không do tắc nghẽn trước tiên được quản lý bằng điều chỉnh vấn đề nội tiết nền nếu có thể, và nếu vẫn không có tinh trùng trong tinh dịch, lấy tinh trùng bằng phẫu thuật vẫn có thể tìm thấy các ổ sinh tinh nhỏ trong tinh hoàn để dùng với ICSI. Tinh trùng lấy được, nếu tìm thấy, thường được dùng ngay hoặc đông lạnh cho chu kỳ IVF/ICSI sau đó. Bệnh nhân đi Ấn Độ điều trị vô tinh thường được làm xét nghiệm chẩn đoán sớm trong chuyến thăm để xác định phương pháp lấy tinh trùng phù hợp trước khi tiến hành.',
			},
			{
				name: 'Điều trị hội chứng buồng trứng đa nang (PCOS)',
				description:
					'Hội chứng buồng trứng đa nang (PCOS) là rối loạn nội tiết có thể gây rụng trứng không đều hoặc không rụng trứng, nồng độ androgen tăng cao và nhiều nang nhỏ trên buồng trứng, là một trong những nguyên nhân hiếm muộn phổ biến hơn ở phụ nữ. Chẩn đoán dựa trên kết hợp triệu chứng, xét nghiệm nội tiết máu và kết quả siêu âm thay vì bất kỳ xét nghiệm đơn lẻ nào. Điều trị được cá nhân hóa tùy mục tiêu trước mắt là điều hòa chu kỳ, kiểm soát triệu chứng như rậm lông hoặc mụn trứng cá, hay đạt được thai kỳ. Với mục tiêu sinh sản, điều trị bước đầu thường bao gồm thay đổi lối sống cùng thuốc uống gây rụng trứng, cân nhắc thuốc nội tiết dạng tiêm hoặc đốt điểm buồng trứng qua nội soi nếu thuốc uống không hiệu quả. Khi chỉ gây rụng trứng không dẫn đến thai kỳ, điều trị có thể tiến triển sang IUI hoặc IVF, đặc biệt nếu có thêm các yếu tố hiếm muộn khác. Vì PCOS khác biệt đáng kể về mức độ nghiêm trọng giữa từng người, kế hoạch điều trị được điều chỉnh dựa trên theo dõi liên tục rụng trứng và đáp ứng nội tiết. Bệnh nhân đi Ấn Độ điều trị hiếm muộn liên quan PCOS thường chia sẻ bảng nội tiết và báo cáo siêu âm gần đây trước chuyến thăm để bác sĩ chuyên khoa có thể đề xuất bước đầu khả thi và thời gian theo dõi chuyến thăm có thể cần.',
			},
			{
				name: 'Điều trị lạc nội mạc tử cung',
				description:
					'Lạc nội mạc tử cung là tình trạng mô tương tự niêm mạc tử cung phát triển bên ngoài tử cung, thường gặp ở buồng trứng, vòi trứng hoặc phúc mạc chậu, nơi nó có thể gây đau, viêm, sẹo và các vấn đề sinh sản. Chẩn đoán thường được hỗ trợ bởi siêu âm hoặc MRI, dù phẫu thuật nội soi vẫn là cách xác định và phân giai đoạn mức độ bệnh chính xác nhất. Điều trị phụ thuộc mức độ triệu chứng và việc sinh sản có phải ưu tiên hay không, từ kiểm soát đau và thuốc nội tiết ức chế mô bất thường, đến phẫu thuật nội soi để loại bỏ hoặc phá hủy các tổn thương nội mạc tử cung, nang và dính trong khi bảo tồn mô buồng trứng lành ở mức tối đa. Với bệnh nhân đang cố gắng thụ thai, điều trị phẫu thuật có thể cải thiện cơ hội thụ thai tự nhiên ở bệnh nhẹ đến trung bình, trong khi trường hợp nặng hơn hoặc dự trữ buồng trứng giảm có thể được khuyến nghị chuyển thẳng sang IVF, đôi khi kèm theo phẫu thuật. Phẫu thuật nội soi được thực hiện dưới gây mê toàn thân qua các đường rạch nhỏ, thường nằm viện ngắn với thời gian hồi phục một đến hai tuần. Bệnh nhân đi Ấn Độ điều trị lạc nội mạc tử cung thường kết hợp chẩn đoán hình ảnh, phẫu thuật nội soi nếu cần và tư vấn theo dõi trong một chuyến thăm được lên kế hoạch duy nhất.',
			},
			{
				name: 'Điều trị tắc vòi trứng',
				description:
					'Tắc vòi trứng ngăn trứng và tinh trùng gặp nhau hoặc ngăn trứng đã thụ tinh di chuyển đến tử cung, là nguyên nhân cấu trúc phổ biến gây hiếm muộn, thường do nhiễm trùng vùng chậu trước đó, lạc nội mạc tử cung, phẫu thuật hoặc mô sẹo. Chẩn đoán thường được thực hiện qua chụp tử cung-vòi trứng, thủ thuật X-quang theo dõi thuốc cản quang qua tử cung và vòi trứng, hoặc qua nội soi kèm xét nghiệm thuốc nhuộm, cho phép quan sát trực tiếp và điều trị một số tắc nghẽn ngay trong cùng thủ thuật. Điều trị tùy vị trí và mức độ tắc nghẽn: một số tắc gần tử cung có thể được thông bằng thủ thuật xâm lấn tối thiểu luồn một ống thông nhỏ qua cổ tử cung, trong khi tắc ở vị trí khác trong vòi trứng, hoặc mô sẹo quanh vòi trứng, có thể được điều trị bằng phẫu thuật nội soi để loại bỏ dính hoặc sửa chữa vòi trứng. Khi vòi trứng tổn thương quá mức để sửa chữa, hoặc sửa chữa khó khôi phục chức năng, IVF thường được khuyến nghị vì bỏ qua hoàn toàn vòi trứng. Các thủ thuật nội soi được thực hiện dưới gây mê toàn thân với nằm viện ngắn và một đến hai tuần hồi phục. Bệnh nhân đi Ấn Độ điều trị tắc vòi trứng thường được chẩn đoán hình ảnh sớm trong chuyến thăm để định hướng lựa chọn giữa phẫu thuật vòi trứng và chuyển sang IVF.',
			},
			{
				name: 'Phẫu thuật bóc u xơ tử cung qua nội soi',
				description:
					'Phẫu thuật bóc u xơ tử cung qua nội soi là thủ thuật xâm lấn tối thiểu để loại bỏ u xơ tử cung, khối u lành tính trong lớp cơ của tử cung, trong khi bảo tồn tử cung, khiến đây là lựa chọn ưu tiên cho phụ nữ muốn giữ khả năng sinh sản hoặc tránh cắt tử cung. Qua vài đường rạch nhỏ ở bụng, bác sĩ dùng camera và dụng cụ chuyên dụng để xác định, bóc tách từng u xơ, sau đó khâu phục hồi lớp cơ tử cung theo từng lớp để duy trì độ chắc của thành tử cung cho các thai kỳ trong tương lai. Thủ thuật được thực hiện dưới gây mê toàn thân, kéo dài một đến vài giờ tùy số lượng, kích thước và vị trí u xơ. Thủ thuật thường được khuyến nghị cho phụ nữ có u xơ gây triệu chứng như ra máu nhiều, đau, áp lực hoặc vấn đề sinh sản, khi vị trí và kích thước u xơ phù hợp với phương pháp nội soi. Hồi phục sau phẫu thuật nội soi thường nhanh hơn mổ mở, nằm viện một đến hai ngày và trở lại hoạt động bình thường trong hai đến ba tuần, dù thai kỳ thường được khuyên trì hoãn vài tháng để vết khâu tử cung lành hẳn. Bệnh nhân đi Ấn Độ bóc u xơ qua nội soi thường lên kế hoạch lưu trú khoảng hai tuần để hoàn tất phẫu thuật và hồi phục ban đầu.',
			},
			{
				name: 'Cắt tử cung qua nội soi',
				description:
					'Cắt tử cung qua nội soi là thủ thuật xâm lấn tối thiểu để loại bỏ tử cung bằng camera và dụng cụ chuyên dụng đưa qua vài đường rạch nhỏ ở bụng, thay vì một đường rạch lớn duy nhất như mổ mở. Tùy tình trạng bệnh nhân, bác sĩ có thể thực hiện cắt toàn bộ tử cung, loại bỏ cả tử cung và cổ tử cung, hoặc thủ thuật bán phần bảo tồn cổ tử cung, buồng trứng có thể hoặc không được loại bỏ cùng lúc tùy chẩn đoán và tuổi bệnh nhân. Thủ thuật được thực hiện dưới gây mê toàn thân, thường kéo dài một đến ba giờ. Thủ thuật thường được khuyến nghị cho các tình trạng như u xơ lớn hoặc nhiều, lạc tuyến cơ tử cung, đau vùng chậu mạn tính, ra máu tử cung bất thường không đáp ứng điều trị khác, hoặc một số bệnh lý phụ khoa khi bảo tồn khả năng sinh sản không còn là mục tiêu. So với mổ mở, phương pháp nội soi thường để lại sẹo nhỏ hơn, ít đau sau mổ hơn, nằm viện ngắn hơn một đến hai ngày và trở lại hoạt động bình thường nhanh hơn, thường trong hai đến bốn tuần. Bệnh nhân đi Ấn Độ cắt tử cung qua nội soi thường lên kế hoạch lưu trú khoảng hai tuần để đội ngũ phẫu thuật theo dõi hồi phục và xác nhận lành thương trước khi đi máy bay quốc tế.',
			},
		],
		benefits: [
			'Phòng lab phôi học và sàng lọc di truyền riêng',
			'Phác đồ kích thích nội tiết cá nhân hóa',
			'Không có tình trạng chờ đợi nhiều tháng — các chu kỳ thường bắt đầu trong vài tuần',
			'Gói dịch vụ trọn gói bao gồm thuốc, theo dõi và bản thân thủ thuật',
		],
		flagshipProcedure: 'Chu kỳ IVF',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '40–50% mỗi chu kỳ' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '35–45% mỗi chu kỳ' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '35–45% mỗi chu kỳ' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '40–48% mỗi chu kỳ' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '40–50% mỗi chu kỳ' },
		],
		inclusions: [
			'Đánh giá hiếm muộn ban đầu, bao gồm phân tích nội tiết và siêu âm',
			'Các buổi theo dõi kích thích buồng trứng',
			'Thủ thuật lấy trứng và chi phí gây mê',
			'Phôi học, thụ tinh và nuôi cấy phôi riêng',
			'Thủ thuật chuyển một phôi',
			'Thuốc hiếm muộn tiêu chuẩn cho chu kỳ kích thích',
		],
		exclusions: [
			'Trứng hiến, tinh trùng hiến hoặc các thỏa thuận mang thai hộ',
			'Xét nghiệm di truyền tiền làm tổ (PGT), trừ khi được yêu cầu cụ thể',
			'Các lần chuyển phôi bổ sung ngoài lần đầu, hoặc chu kỳ chuyển phôi đông lạnh',
			'Thuốc ngoài phác đồ kích thích tiêu chuẩn',
			'Điều trị vô sinh nam, như ICSI/TESA, nếu không được báo giá riêng',
		],
		faqs: [
			{
				question: 'Điều trị IVF tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Một chu kỳ IVF tại Ấn Độ bắt đầu từ 3.000 USD, thấp hơn khoảng 80% so với Mỹ, bao gồm đánh giá, theo dõi kích thích, lấy trứng, phôi học và chuyển một phôi.',
			},
			{
				question: 'Tỷ lệ thành công của IVF tại Ấn Độ là bao nhiêu?',
				answer:
					'Các phòng khám hiếm muộn hàng đầu tại Ấn Độ báo cáo tỷ lệ thành công mỗi chu kỳ là 40–50%, tương đương với các phòng khám tốt nhất tại Mỹ và châu Âu, kết quả phụ thuộc vào độ tuổi và các yếu tố sinh sản nền tảng.',
			},
			{
				question: 'Một chu kỳ IVF kéo dài bao lâu?',
				answer:
					'Một chu kỳ đầy đủ, từ kích thích đến chuyển phôi, thường kéo dài 2–3 tuần, vì vậy hầu hết bệnh nhân quốc tế dự kiến ở lại Ấn Độ khoảng 3 tuần để hoàn thành theo dõi, lấy trứng và chuyển phôi.',
			},
			{
				question: 'Bạn có cung cấp chương trình trứng hiến hoặc mang thai hộ không?',
				answer:
					'Những thỏa thuận này liên quan đến các bước pháp lý và y tế bổ sung và được báo giá riêng — hãy liên hệ điều phối viên hiếm muộn của chúng tôi để thảo luận về điều kiện và quy định hiện hành.',
			},
			{
				question: 'Điều trị có thể bắt đầu mà không cần đi ngay không?',
				answer:
					'Có, buổi tư vấn từ xa ban đầu và xem xét báo cáo có thể diễn ra trước khi bạn khởi hành, để phác đồ của bạn được lên kế hoạch trước và chuyến đi được đồng bộ với chu kỳ kích thích.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ tiền sử hiếm muộn và mọi báo cáo xét nghiệm trước đây qua biểu mẫu liên hệ, điều phối viên hiếm muộn sẽ sắp xếp đánh giá chuyên môn và ước tính minh bạch trong 24 giờ.',
			},
		],
	},

	'organ-transplant': {
		name: 'Ghép tạng',
		shortDescription: 'Chương trình ghép gan và ghép thận với đội ngũ chăm sóc sau phẫu thuật tận tâm.',
		overview:
			'Ấn Độ thực hiện một trong những khối lượng ghép gan và ghép thận từ người hiến sống lớn nhất thế giới, được hỗ trợ bởi khoa ICU ghép tạng chuyên biệt và chương trình theo dõi sau phẫu thuật dài hạn cho bệnh nhân quốc tế.',
		procedures: ['Ghép thận', 'Ghép gan', 'Ghép tủy xương'],
		detailedProcedures: [
			{
				name: 'Ghép gan',
				description:
					'Ghép gan thay thế một lá gan bị bệnh hoặc suy yếu bằng một lá gan khỏe mạnh, được thực hiện ở bệnh nhân mắc bệnh gan giai đoạn cuối, xơ gan, một số loại ung thư gan trong giới hạn kích thước và số lượng nhất định, hoặc suy gan cấp tính. Gan thay thế có thể đến từ người hiến đã qua đời hoặc, phổ biến hơn ở Ấn Độ, từ người hiến sống cho một phần gan của họ, phần gan này sẽ tái tạo gần như đầy đủ kích thước ở cả người cho và người nhận trong vòng vài tháng. Trong ca mổ, gan bị bệnh được loại bỏ và gan hoặc đoạn gan của người hiến được nối với các mạch máu và ống mật của người nhận, một thủ thuật phức tạp thường mất tám đến mười hai giờ và đòi hỏi đội ngũ phẫu thuật ghép tạng giàu kinh nghiệm. Người nhận trải qua thời gian chăm sóc đặc biệt ngay sau mổ, sau đó là một đến hai tuần nằm viện, và bắt đầu dùng thuốc ức chế miễn dịch suốt đời để ngăn ngừa thải ghép. Các trung tâm ghép tạng của Ấn Độ có kinh nghiệm sâu rộng về ghép gan từ người hiến sống, bao gồm đánh giá kỹ lưỡng người hiến để xác nhận an toàn. Bệnh nhân quốc tế thường cần có người hiến sống tiềm năng đi cùng và nên lên kế hoạch lưu trú kéo dài nhiều tuần để hoàn tất đánh giá người cho và người nhận, phẫu thuật, và giai đoạn hồi phục quan trọng ban đầu trước khi việc về nước được coi là an toàn.',
			},
			{
				name: 'Ghép gan nhi',
				description:
					'Ghép gan nhi được thực hiện ở trẻ sơ sinh và trẻ em bị suy gan do các tình trạng như teo đường mật, rối loạn chuyển hóa di truyền hoặc suy gan cấp tính, khi gan không còn có thể hỗ trợ sự phát triển và sức khỏe của trẻ. Vì tạng từ người hiến đã qua đời có kích thước phù hợp với trẻ nhỏ rất hạn chế, ghép từ người hiến sống đặc biệt quan trọng trong các ca nhi khoa, thường là cha mẹ hoặc người thân hiến một đoạn gan nhỏ được phẫu thuật tạo hình và nối phù hợp với mạch máu và ống mật nhỏ hơn của trẻ. Ca mổ đòi hỏi đội ngũ phẫu thuật ghép tạng nhi khoa giàu kinh nghiệm về độ chính xác kỹ thuật mà giải phẫu nhỏ đòi hỏi, cùng với hỗ trợ chăm sóc đặc biệt nhi khoa sau đó để quản lý cân bằng dịch, ức chế miễn dịch và nguy cơ nhiễm trùng. Trẻ em thường nằm viện một đến hai tuần sau phẫu thuật, với theo dõi chặt chẽ chức năng gan và đưa vào dần thuốc chống thải ghép suốt đời. Các chương trình ghép tạng nhi khoa của Ấn Độ có kinh nghiệm điều trị trẻ nhỏ từ nước ngoài, phối hợp đánh giá người hiến cho các thành viên gia đình đi cùng song song với việc đánh giá của chính trẻ. Các gia đình nên lên kế hoạch lưu trú kéo dài nhiều tuần để hoàn tất đánh giá người cho và người nhận, phẫu thuật, và giai đoạn hồi phục sớm khi trẻ được theo dõi chặt chẽ về biến chứng.',
			},
			{
				name: 'Ghép thận',
				description:
					'Ghép thận được thực hiện cho bệnh nhân mắc bệnh thận giai đoạn cuối mà thận không còn có thể lọc đủ chất thải từ máu, mang lại một giải pháp thay thế cho chạy thận nhân tạo lâu dài. Thận hiến, có thể đến từ người thân sống hoặc người hiến sống được phê duyệt, hoặc trong một số trường hợp là người hiến đã qua đời, được phẫu thuật đặt vào vùng bụng dưới của người nhận và nối với các mạch máu gần đó và bàng quang; thận không còn chức năng của chính bệnh nhân thường được để nguyên tại chỗ. Ca mổ thường mất ba đến bốn giờ dưới gây mê toàn thân, thận được ghép thường bắt đầu sản xuất nước tiểu trong vòng vài giờ. Người nhận cần dùng thuốc ức chế miễn dịch suốt đời để ngăn thải ghép và được theo dõi chặt chẽ trong những tuần đầu về dấu hiệu thải ghép hoặc nhiễm trùng. Người hiến sống trải qua một thủ thuật riêng, thường là nội soi, để lấy một quả thận, hầu hết sau đó sống khỏe mạnh với quả thận còn lại. Các trung tâm ghép tạng của Ấn Độ thực hiện khối lượng lớn ghép thận từ người hiến sống, bao gồm xét nghiệm tương thích cẩn thận và đánh giá an toàn người hiến. Bệnh nhân quốc tế thường cần có người hiến đi cùng khi áp dụng và nên lên kế hoạch lưu trú nhiều tuần để đánh giá, phẫu thuật và theo dõi chức năng thận sớm trước khi về nước.',
			},
			{
				name: 'Ghép tủy xương',
				description:
					'Ghép tủy xương, còn gọi là ghép tế bào gốc, thay thế tủy xương bị bệnh hoặc tổn thương của bệnh nhân bằng các tế bào gốc tạo máu khỏe mạnh, được sử dụng để điều trị các tình trạng như bạch cầu, lymphoma, đa u tủy, thiếu máu bất sản và một số rối loạn máu di truyền. Trong ghép tự thân, tế bào gốc của chính bệnh nhân được thu thập, lưu trữ và truyền lại sau hóa trị liều cao; trong ghép đồng loại, tế bào gốc đến từ người hiến phù hợp, thường là anh chị em ruột hoặc người hiến không liên quan được xác định qua xét nghiệm mô. Trước khi ghép, bệnh nhân trải qua một phác đồ điều kiện hóa bằng hóa trị và đôi khi xạ trị để loại bỏ tủy bị bệnh và ức chế hệ miễn dịch, sau đó tế bào gốc được truyền qua tĩnh mạch và di chuyển đến tủy xương để bắt đầu sản xuất tế bào máu mới trong hai đến bốn tuần tiếp theo. Giai đoạn này đòi hỏi cách ly trong một đơn vị ghép chuyên biệt để bảo vệ chống nhiễm trùng trong khi số lượng tế bào máu hồi phục. Người nhận ghép đồng loại cũng cần thuốc để ngăn ngừa bệnh ghép chống chủ, khi tế bào miễn dịch của người hiến phản ứng chống lại mô của người nhận. Các trung tâm ghép tạng của Ấn Độ cung cấp cả ghép tủy tự thân và đồng loại với cơ sở cách ly chuyên biệt, bệnh nhân quốc tế thường lên kế hoạch lưu trú sáu đến tám tuần để hoàn tất điều kiện hóa, ghép và hồi phục ban đầu.',
			},
			{
				name: 'Ghép tim',
				description:
					'Ghép tim thay thế một trái tim bị bệnh nặng hoặc suy yếu bằng một trái tim hiến khỏe mạnh, thường được xem xét cho bệnh nhân suy tim giai đoạn nặng không đáp ứng với thuốc, thiết bị hoặc các điều trị phẫu thuật khác. Vì trái tim hiến phù hợp phải đến từ người hiến đã qua đời và phù hợp về nhóm máu và kích thước cơ thể, ứng viên được đưa vào danh sách chờ và trải qua đánh giá kỹ lưỡng để xác nhận đủ điều kiện phẫu thuật và ức chế miễn dịch lâu dài. Trong ca mổ, được thực hiện với bệnh nhân trên máy tim phổi nhân tạo, trái tim bị bệnh được loại bỏ và trái tim hiến được nối với các mạch máu lớn, thường mất bốn đến sáu giờ. Người nhận trải qua thời gian chăm sóc đặc biệt ngay sau đó và nằm viện vài tuần trong khi bác sĩ theo dõi thải ghép và nhiễm trùng, điều chỉnh thuốc chống thải ghép suốt đời. Sinh thiết định kỳ của trái tim mới được thực hiện trong những tháng đầu để kiểm tra thải ghép. Các chương trình ghép tạng của Ấn Độ quản lý toàn bộ lộ trình từ đánh giá đến chăm sóc sau ghép, mặc dù bệnh nhân quốc tế nên biết rằng tình trạng sẵn có của tim hiến và thời gian chờ thay đổi tùy theo quy trình phân bổ tại chỗ. Thời gian lưu trú kéo dài nhiều tuần đến vài tháng thường cần thiết để bao gồm thời gian chờ, phẫu thuật và hồi phục.',
			},
			{
				name: 'Ghép tim-phổi',
				description:
					'Ghép tim-phổi kết hợp thay thế cả tim và phổi trong một ca mổ duy nhất và được dành riêng cho bệnh nhân mắc bệnh nặng, tiến triển ảnh hưởng đến cả hai cơ quan cùng lúc, chẳng hạn như các tình trạng tim bẩm sinh phức tạp kèm tổn thương phổi liên quan, hoặc tăng áp phổi nặng đã gây suy tim không hồi phục. Vì cần một bộ tạng hiến phù hợp từ một người hiến đã qua đời duy nhất, đây là một thủ thuật hiếm gặp và phức tạp hơn so với ghép đơn tạng, với thời gian chờ dài hơn do nguồn tạng hiến hạn chế. Ca mổ được thực hiện với bệnh nhân trên máy tim phổi nhân tạo trong khi đội ngũ phẫu thuật loại bỏ tim và phổi bị bệnh và nối các tạng hiến với đường thở và mạch máu lớn của người nhận. Hồi phục bao gồm thời gian kéo dài trong chăm sóc đặc biệt, quản lý cẩn thận chức năng hô hấp và phổi, và theo dõi chặt chẽ thải ghép của một trong hai cơ quan, cùng với thuốc ức chế miễn dịch suốt đời. Phục hồi chức năng dần dần xây dựng lại dung tích phổi và sức bền thể chất trong nhiều tháng. Các trung tâm ghép tạng của Ấn Độ có khả năng ghép ngực kết hợp đánh giá kỹ lưỡng ứng viên trước khi đưa vào danh sách, bệnh nhân quốc tế nên dự kiến một quá trình kéo dài bao gồm đánh giá, thời gian chờ, phẫu thuật và hồi phục kéo dài nhiều tháng trước khi cân nhắc về nước.',
			},
			{
				name: 'Ghép phổi',
				description:
					'Ghép phổi thay thế một hoặc cả hai lá phổi bị bệnh bằng phổi hiến khỏe mạnh và được xem xét cho bệnh nhân mắc bệnh phổi giai đoạn cuối như bệnh phổi tắc nghẽn mãn tính, xơ phổi, xơ nang hoặc tăng áp phổi nặng, khi điều trị y tế không còn có thể duy trì chức năng hô hấp đầy đủ. Tùy vào tình trạng, có thể ghép một lá phổi hoặc cả hai lá; thủ thuật được thực hiện dưới gây mê toàn thân, thường với hỗ trợ tuần hoàn như máy tim phổi nhân tạo, trong khi đội ngũ phẫu thuật loại bỏ mô phổi bị bệnh và nối đường thở và mạch máu của phổi hiến với người nhận. Ca mổ thường mất vài giờ cho mỗi lá phổi, người nhận trải qua thời gian thở máy và chăm sóc đặc biệt sau đó trong khi chức năng phổi ổn định. Một chương trình phục hồi chức năng phổi có cấu trúc tiếp theo trong nhiều tháng sau để xây dựng lại dung tích hô hấp và sức bền, cùng với thuốc ức chế miễn dịch suốt đời và theo dõi định kỳ về thải ghép hoặc nhiễm trùng. Các trung tâm ghép tạng của Ấn Độ đánh giá ứng viên cẩn thận về mức độ phù hợp, bao gồm mức độ nặng của bệnh và tình trạng sức khỏe tổng thể cho phẫu thuật lớn. Vì nguồn phổi hiến ảnh hưởng đến thời gian chờ, bệnh nhân quốc tế nên lên kế hoạch lưu trú kéo dài, có phần thay đổi, bao gồm đánh giá, thời gian chờ, phẫu thuật và phục hồi chức năng sớm trước khi về nước.',
			},
		],
		benefits: [
			'Chương trình ghép từ người hiến sống với khối lượng lớn',
			'Khoa ICU ghép tạng chuyên biệt và phòng hồi phục cách ly',
			'Lập kế hoạch ức chế miễn dịch dài hạn và chăm sóc theo dõi',
			'Hỗ trợ pháp lý và đạo đức cho việc đánh giá người hiến trong suốt quá trình',
		],
		flagshipProcedure: 'Ghép gan từ người hiến sống',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: 'Nhiều năm (danh sách chờ)', successRate: '88–92%' },
			{ country: 'Vương quốc Anh', waitTime: '1–3 năm', successRate: '88–91%' },
			{ country: 'Đức', waitTime: '6–18 tháng', successRate: '87–90%' },
			{ country: 'Thái Lan', waitTime: 'Trung bình', successRate: '85–88%' },
			{ country: 'Ấn Độ', waitTime: '2–4 tuần', successRate: '90%+' },
		],
		inclusions: [
			'Đánh giá trước ghép cho người nhận và một người hiến, dưới dạng ngoại trú',
			'Tiền phòng: người nhận — 21 ngày (5 ngày ICU + 16 ngày phòng riêng); người hiến — 8 ngày (2 ngày ICU + 6 ngày phòng riêng)',
			'Chi phí bác sĩ phẫu thuật cho người hiến và người nhận',
			'Chi phí bác sĩ gây mê cho người hiến và người nhận',
			'Chi phí phòng mổ cho người hiến và người nhận',
			'Chi phí dịch vụ gây mê cho người hiến và người nhận',
			'Chi phí dịch vụ xét nghiệm',
			'Chi phí dịch vụ truyền máu',
			'Chi phí dịch vụ chẩn đoán hình ảnh',
			'Chi phí dịch vụ vật lý trị liệu',
			'Chi phí dịch vụ dược, bao gồm thuốc và vật tư y tế',
		],
		exclusions: [
			'Thời gian nằm viện trước phẫu thuật để cải thiện tình trạng bệnh nhân, cũng như thuốc/xét nghiệm sau khi xuất viện',
			'Đánh giá bất kỳ người hiến bổ sung nào khác',
			'Bất kỳ khoảng thời gian nằm viện hoặc ICU nào vượt quá thời hạn của gói dịch vụ',
			'Tất cả xét nghiệm, thuốc và vật tư vượt mức trần chi phí',
			'Các loại thuốc đắt tiền hoặc ít sử dụng, như Zenapax, Simulect, Valcyte, Novoseven, Thymoglobulin, Ambisome, Caspofungin và Anidulafungin',
			'Chi phí cho bất kỳ buổi tư vấn hoặc thủ thuật nào với chuyên gia không liên quan đến ghép tạng',
			'Chi phí chẩn đoán hình ảnh can thiệp, bao gồm dẫn lưu qua da, dẫn lưu mật xuyên gan qua da và chụp mạch',
			'Các thủ thuật tim mạch (siêu âm tim, chụp mạch) và chi phí liên quan đến thận học (lọc máu, CRRT)',
			'Các thủ thuật nội soi như ERCP',
			'Can thiệp lại',
		],
		faqs: [
			{
				question: 'Ghép gan tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Ca ghép gan tại Ấn Độ bắt đầu từ 25.000 USD, thấp hơn khoảng 60–70% so với Mỹ hoặc Anh. Gói dịch vụ bao gồm đánh giá trước ghép cho người nhận và một người hiến, ca can thiệp cho cả hai, thời gian nằm ICU và bệnh viện, chi phí phòng mổ, chăm sóc y tế, xét nghiệm và dịch vụ dược.',
			},
			{
				question: 'Tỷ lệ thành công của ghép gan tại Ấn Độ là bao nhiêu?',
				answer:
					'Các trung tâm ghép gan hàng đầu tại Ấn Độ báo cáo tỷ lệ thành công sau một năm hơn 90%, tương đương với các chương trình hàng đầu tại Mỹ và châu Âu. Tỷ lệ sống sau 5 năm khoảng 75%, tùy thuộc vào bệnh lý nền, tình trạng sức khỏe tổng quát của bệnh nhân và việc tuân thủ theo dõi.',
			},
			{
				question: 'Ai có thể làm người hiến gan để ghép tại Ấn Độ?',
				answer:
					'Đối với ghép gan từ người hiến sống, người hiến phải là người thân ruột thịt gần gũi (cha/mẹ, anh/chị/em, con hoặc vợ/chồng), trong độ tuổi 18–55, khỏe mạnh, có nhóm máu tương thích và chức năng gan bình thường. Việc hiến tặng phải hoàn toàn tự nguyện — bất kỳ giao dịch tài chính nào giữa người hiến và người nhận đều là bất hợp pháp theo luật Ấn Độ. Đánh giá toàn diện về người hiến thường hoàn tất trong 2–3 ngày.',
			},
			{
				question: 'Thời gian nằm viện cho ghép gan tại Ấn Độ là bao lâu?',
				answer:
					'Người nhận nằm viện khoảng 21 ngày — 5 ngày ICU và 16 ngày phòng riêng. Người hiến nằm viện khoảng 8 ngày — 2 ngày ICU và 6 ngày phòng riêng. Sau khi xuất viện, người nhận nên ở lại Ấn Độ ít nhất 1 tháng để được theo dõi cẩn thận, do đó thời gian lưu trú tổng cộng tại Ấn Độ thường khoảng 2 tháng.',
			},
			{
				question: 'Gan có thể tái tạo sau khi hiến từ người hiến sống không?',
				answer:
					'Có. Gan là cơ quan rắn duy nhất trong cơ thể người có thể tái tạo hoàn toàn. Sau khi hiến một phần, phần gan còn lại của người hiến sẽ phát triển đến khoảng 80% kích thước ban đầu trong vài tuần và gần bằng kích thước ban đầu trong vài tháng. Phần gan được ghép cho người nhận cũng sẽ phát triển đến kích thước đầy đủ.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Gửi hồ sơ y tế của người nhận và người hiến tiềm năng qua biểu mẫu liên hệ hoặc WhatsApp, đội ngũ điều phối ghép tạng của chúng tôi sẽ sắp xếp đánh giá chuyên môn miễn phí và buổi tư vấn từ xa với bác sĩ phẫu thuật ghép tạng trước khi bạn khởi hành.',
			},
		],
	},

	'dental-care': {
		name: 'Nha khoa',
		shortDescription: 'Cấy ghép, mặt dán sứ và phục hồi toàn bộ răng miệng, sử dụng công nghệ nha khoa kỹ thuật số mới nhất.',
		overview:
			'Thiết kế nụ cười kỹ thuật số, mão răng CAD/CAM trong ngày và phục hồi toàn diện bằng cấy ghép là tiêu chuẩn tại các trung tâm nha khoa hàng đầu Ấn Độ — mang lại kết quả trong vài ngày, thay vì nhiều tháng như thường thấy khi điều trị theo giai đoạn ở nước ngoài.',
		procedures: ['Cấy ghép răng', 'Mặt dán sứ', 'Phục hồi toàn bộ răng miệng'],
		detailedProcedures: [
			{
				name: 'Cấy ghép răng toàn hàm',
				description:
					'Cấy ghép răng toàn hàm thay thế toàn bộ một hàm, hoặc cả hai hàm, răng bị mất hoặc hư hỏng nặng bằng một bộ phục hình cố định được hỗ trợ bởi trụ cấy ghép. Quá trình bắt đầu bằng đánh giá chi tiết mật độ xương hàm bằng chụp CT 3D, sau đó là đặt phẫu thuật nhiều trụ cấy ghép titan vào hàm trên và/hoặc hàm dưới, đóng vai trò là chân răng nhân tạo. Trong giai đoạn lành thương, gọi là tích hợp xương, các trụ cấy ghép hợp nhất với xương xung quanh để tạo nền tảng ổn định trước khi một cầu răng hoặc phục hình toàn hàm được chế tạo riêng được gắn vào. Bệnh nhân thường cân nhắc lựa chọn này sau khi mất phần lớn hoặc toàn bộ răng tự nhiên do bệnh nướu tiến triển, sâu răng, chấn thương hoặc đeo răng giả lâu năm gây mất xương. So với răng giả tháo lắp, phục hình cấy ghép toàn hàm mang lại khả năng nhai, phát âm và nâng đỡ khuôn mặt tốt hơn, vì nó không phụ thuộc vào lực hút hay keo dán. Các đội ngũ nha khoa tại Ấn Độ thường kết hợp thiết kế nụ cười kỹ thuật số với phòng lab cấy ghép và phục hình tại chỗ để việc đặt trụ, lành thương và phục hình cuối cùng có thể được phối hợp trong một hành trình điều trị duy nhất, thường qua một đến hai lần đến cách nhau vài tháng.',
			},
			{
				name: 'Cấy ghép răng All-on-4',
				description:
					'Kỹ thuật All-on-4 phục hồi toàn bộ một hàm răng chỉ bằng bốn trụ cấy ghép được đặt chiến lược, hai trụ đặt thẳng đứng phía trước hàm và hai trụ nghiêng về phía sau để tận dụng xương đặc hơn và tránh các cấu trúc như xoang hàm hoặc ống dây thần kinh. Việc đặt nghiêng này thường cho phép gắn cầu răng tạm thời cố định vào các trụ cấy ghép ngay trong ngày phẫu thuật, giúp bệnh nhân có răng chức năng, trông tự nhiên trong khi các trụ cấy ghép tích hợp với xương trong những tháng tiếp theo. Kỹ thuật này thường được khuyến nghị cho bệnh nhân đã mất phần lớn răng hoặc cần nhổ toàn bộ một hàm, đặc biệt là những người không đủ thể tích xương cho số lượng đầy đủ trụ cấy ghép mà không cần ghép xương bổ sung. Khi lành thương hoàn tất, cầu răng tạm thời được thay bằng phục hình cuối cùng bền hơn. Vì phương pháp này dùng ít trụ cấy ghép hơn và thường tránh được ghép xương, nó có thể rút ngắn tổng thời gian điều trị so với cấy ghép toàn hàm truyền thống. Các phòng khám tại Ấn Độ thường cung cấp thủ thuật này với phần mềm lập kế hoạch kỹ thuật số để xác định chính xác góc đặt trụ, cho phép bệnh nhân quốc tế hoàn tất giai đoạn phẫu thuật và nhận cầu răng tạm chức năng trong một chuyến đi duy nhất.',
			},
			{
				name: 'Cấy ghép răng All-on-6',
				description:
					'Phương pháp All-on-6 phục hồi một hàm răng bị mất hoàn toàn bằng cách neo một cầu răng cố định vào sáu trụ cấy ghép phân bố đều dọc theo hàm, thay vì bốn trụ như phương pháp All-on-4. Các trụ cấy ghép bổ sung phân tán lực cắn qua nhiều điểm hơn, có thể mang lại độ ổn định thêm cho bệnh nhân có lực cắn cao hơn hoặc những người muốn nền tảng rộng hơn cho phục hình cố định lâu dài. Ứng viên thường là bệnh nhân có thể tích xương hàm đủ, bị mất phần lớn hoặc toàn bộ răng trong một hàm, do bệnh nha chu tiến triển, sâu răng hoặc mất răng trước đó. Phẫu thuật bao gồm đặt chính xác các trụ cấy ghép, được hướng dẫn bằng hình ảnh 3D, sau đó là giai đoạn lành thương khi xương hợp nhất quanh các trụ trước khi gắn cầu răng cuối cùng; trong nhiều trường hợp, cầu răng tạm cố định được gắn ngay sau phẫu thuật. Kỹ thuật này thường được chọn thay cho răng giả tháo lắp vì loại bỏ nhu cầu dùng keo dán và phục hồi khả năng nhai gần như bình thường. Các trung tâm cấy ghép tại Ấn Độ thường kết hợp thủ thuật này với phòng lab nha khoa tại chỗ, cho phép lập kế hoạch giai đoạn phẫu thuật và phục hình cùng nhau và hoàn tất trong một chuyến thăm kéo dài.',
			},
			{
				name: 'Cấy ghép răng tức thì (3 ngày)',
				description:
					'Cấy ghép răng tức thì, hay 3 ngày, là một quy trình trong đó việc đặt trụ cấy ghép, lắp mão hoặc cầu răng tạm thời và tái khám ban đầu được rút gọn thành một chuyến thăm ngắn, có cấu trúc thay vì trải dài qua nhiều chuyến đi riêng biệt. Vào ngày đầu tiên, các trụ cấy ghép được đặt phẫu thuật vào xương hàm, thường sử dụng lập kế hoạch kỹ thuật số có hướng dẫn để xác định vị trí lý tưởng; khi chất lượng xương cho phép, một phục hình cố định tạm thời được gắn ngay trong cùng chuyến thăm hoặc ngay sau đó, để bệnh nhân rời đi với răng chức năng, thẩm mỹ thay vì khoảng trống hoặc thiết bị tháo lắp. Những ngày tiếp theo thường được dùng để xem xét quá trình lành thương, điều chỉnh khớp cắn và tinh chỉnh phục hình tạm trước khi bệnh nhân về nước, với phục hình vĩnh viễn cuối cùng được hoàn tất sau đó, tại chỗ hoặc trong chuyến thăm tiếp theo, khi tích hợp xương hoàn tất. Phương pháp này phù hợp với bệnh nhân cần điều trị hiệu quả do hạn chế về thời gian đi lại và có mật độ xương đủ để chịu tải tức thì. Các đội ngũ cấy ghép tại Ấn Độ thường xây dựng quy trình này đặc biệt dành cho bệnh nhân quốc tế, phối hợp chụp hình, phẫu thuật và phục hình tạm trong một lịch trình gọn nhẹ trong khi lên kế hoạch tái khám khi các trụ cấy ghép đã tích hợp hoàn toàn.',
			},
			{
				name: 'Cấy ghép răng mini',
				description:
					'Cấy ghép răng mini là các trụ titan có đường kính hẹp hơn, thường dưới ba milimet, được sử dụng để neo răng thay thế hoặc ổn định răng giả ở bệnh nhân có xương hàm quá mỏng hoặc hẹp cho trụ cấy ghép thông thường. Vì kích thước nhỏ hơn, chúng thường có thể được đặt bằng kỹ thuật xâm lấn tối thiểu tránh được nhu cầu ghép xương, sử dụng lỗ dẫn nhỏ thay vì vạt phẫu thuật lớn hơn, thường rút ngắn cả thời gian thủ thuật và hồi phục. Chúng thường được dùng nhiều nhất để cố định răng giả hàm dưới hoặc hàm trên bằng khớp bi-ổ hoặc thanh gắn, chuyển đổi một thiết bị tháo lắp lỏng lẻo thành thiết bị ổn định hơn, mặc dù chúng cũng có thể hỗ trợ mão răng đơn trong trường hợp xương hạn chế. Bệnh nhân cần lựa chọn này bao gồm những người bị mất xương đáng kể không phải ứng viên cho cấy ghép tiêu chuẩn, hoặc bệnh nhân lớn tuổi muốn một cách ít xâm lấn hơn để cải thiện độ ổn định của răng giả. Thời gian lành thương nói chung ngắn hơn so với cấy ghép tiêu chuẩn, và trong nhiều trường hợp phục hình có thể được gắn ngay sau khi đặt. Các phòng khám nha khoa tại Ấn Độ thường cung cấp cấy ghép mini như một lựa chọn chi phí thấp hơn, nhanh hơn cho bệnh nhân tập trung vào ổn định răng giả thay vì tái tạo cố định toàn hàm.',
			},
			{
				name: 'Cấy ghép răng xương gò má (Zygomatic)',
				description:
					'Cấy ghép xương gò má là các trụ titan dài khác thường, thường từ 30 đến 50 milimet, được neo không phải vào xương hàm trên mà vào xương gò má (xương má), vốn đặc hơn và ít bị tiêu xương, tình trạng thường ảnh hưởng đến hàm trên sau khi mất răng lâu năm. Chúng được dùng cho bệnh nhân bị mất xương hàm trên nghiêm trọng, không phải ứng viên cho cấy ghép thông thường và nếu không sẽ cần các thủ thuật ghép xương rộng rãi trước khi có thể đặt bất kỳ trụ cấy ghép nào. Trong phẫu thuật, trụ cấy ghép được đưa vào theo một góc đi qua hàm trên và bám vào xương gò má, cung cấp một điểm neo ổn định cho phục hình cố định, trong nhiều trường hợp cho phép gắn cầu răng tạm toàn hàm ngay sau phẫu thuật. Kỹ thuật này có thể loại bỏ quá trình ghép xương và lành thương kéo dài nhiều tháng vốn cần thiết, khiến nó trở thành lựa chọn cho bệnh nhân muốn con đường nhanh hơn đến phục hình cố định bất chấp tình trạng thiếu xương đáng kể. Vì việc đặt trụ cấy ghép xương gò má đòi hỏi đào tạo phẫu thuật và hình ảnh chuyên biệt, nó thường được thực hiện bởi các bác sĩ phẫu thuật hàm mặt giàu kinh nghiệm. Các trung tâm tại Ấn Độ cung cấp thủ thuật này thường sử dụng hình ảnh chụp cắt lớp chùm tia hình nón 3D để lập kế hoạch phẫu thuật chính xác do độ phức tạp giải phẫu liên quan.',
			},
			{
				name: 'Mão răng (Crown)',
				description:
					'Mão răng là một chụp răng được chế tạo riêng, thường làm từ sứ, zirconia, kim loại hoặc kết hợp các vật liệu này, bao phủ hoàn toàn một chiếc răng bị hư hỏng hoặc yếu để phục hồi hình dạng, độ bền và vẻ ngoài của nó. Mão răng được khuyến nghị khi một chiếc răng bị suy yếu đáng kể do miếng trám lớn, nứt, mòn, hoặc đã điều trị tủy, vì thủ thuật thường loại bỏ đủ cấu trúc răng khiến phần răng còn lại cần thêm hỗ trợ để chịu được lực cắn bình thường. Việc đặt mão thường bao gồm mài răng để tạo khoảng trống cho mão, lấy dấu kỹ thuật số hoặc vật lý, và lắp mão tạm trong khi mão vĩnh viễn được chế tạo, thường tại phòng lab nha khoa, trước khi được gắn cố định tại lần tái khám. Hệ thống mão răng trong ngày sử dụng công nghệ phay tại phòng khám có thể rút ngắn đáng kể quá trình này bằng cách thiết kế và sản xuất mão ngay tại ghế nha khoa. Mão răng cũng được dùng để chụp lên trụ cấy ghép và neo cầu răng thay thế răng bị mất. Các phòng khám nha khoa tại Ấn Độ thường cung cấp nhiều lựa chọn vật liệu mão với tính thẩm mỹ và độ bền khác nhau, nhiều nơi sử dụng quét kỹ thuật số và phay tại chỗ để giảm số lần tái khám cần thiết.',
			},
			{
				name: 'Răng giả và cầu răng',
				description:
					'Răng giả và cầu răng là hai phương pháp truyền thống để thay thế răng mất mà không cần phẫu thuật. Răng giả là một thiết bị tháo lắp, bán phần hoặc toàn phần, làm từ nền acrylic hoặc dẻo với răng nhân tạo, được thiết kế để tựa trên nướu và, ở hàm trên, một phần vòm miệng; nó được giữ cố định bằng lực hút, móc cài hoặc keo dán và có thể tháo ra để vệ sinh. Ngược lại, cầu răng là phục hình cố định thay thế một hoặc nhiều răng mất bằng cách neo răng nhân tạo vào răng tự nhiên hoặc trụ cấy ghép ở hai bên khoảng trống, thường dùng mão răng gắn cố định trên các răng trụ. Bệnh nhân chọn các lựa chọn này dựa trên số lượng răng mất, tình trạng răng còn lại, sức khỏe xương và ngân sách, vì cả hai đều ít xâm lấn hơn và phải chăng hơn so với các lựa chọn dựa trên cấy ghép. Việc lắp bao gồm lấy dấu hoặc quét kỹ thuật số, chế tạo tại phòng lab và các lần tái khám điều chỉnh để đảm bảo thoải mái và khớp cắn tự nhiên. Các phòng lab nha khoa của Ấn Độ thường sử dụng công nghệ CAD/CAM để chế tạo răng giả và cầu răng chính xác, vừa khít, nhiều phòng khám có thể hoàn tất thiết kế, chế tạo và lắp đặt trong một chuyến thăm kéo dài duy nhất cho bệnh nhân quốc tế.',
			},
			{
				name: 'Điều trị tủy răng',
				description:
					'Điều trị tủy răng, hay nội nha, loại bỏ mô tủy bị nhiễm trùng hoặc viêm bên trong răng để giảm đau và cứu một chiếc răng có thể phải nhổ nếu không điều trị. Thủ thuật thường cần thiết khi sâu răng sâu, răng nứt hoặc các thủ thuật nha khoa lặp lại cho phép vi khuẩn xâm nhập buồng tủy và ống tủy, gây nhiễm trùng, sưng hoặc đau dai dẳng, đặc biệt khi gặp nóng, lạnh hoặc áp lực. Dưới gây tê tại chỗ, nha sĩ tạo một lỗ nhỏ trên răng, loại bỏ tủy bị hỏng, làm sạch và tạo hình ống tủy trước khi trám đầy bằng vật liệu tương thích sinh học để ngăn nhiễm trùng thêm. Vì răng đã điều trị trở nên giòn hơn khi không còn nguồn máu, nó thường được chụp mão sau đó, đặc biệt với răng hàm chịu lực nhai lớn. Điều trị tủy hiện đại thường hoàn tất trong một hoặc hai lần hẹn bằng dụng cụ quay và, ở nhiều phòng khám, kính hiển vi phẫu thuật để tăng độ chính xác, và hầu hết bệnh nhân cảm thấy giảm đau đáng kể so với trước điều trị thay vì khó chịu thêm. Các trung tâm nha khoa tại Ấn Độ thường sử dụng X-quang kỹ thuật số và máy định vị chóp để lập bản đồ chính xác giải phẫu ống tủy, giúp đảm bảo làm sạch kỹ lưỡng và kết quả trám bít tốt.',
			},
			{
				name: 'Mặt dán sứ (Veneers)',
				description:
					'Mặt dán sứ là các lớp vỏ mỏng, thường làm bằng sứ hoặc nhựa composite, được dán vào mặt trước của răng để cải thiện vẻ ngoài bằng cách thay đổi màu sắc, hình dạng, kích thước hoặc sự sắp xếp. Chúng thường được dùng để giải quyết tình trạng ố màu không đáp ứng với tẩy trắng, sứt mẻ, khoảng cách giữa các răng, hoặc răng hơi lệch hình hay không đều, mang lại cách cải thiện nụ cười mà không cần di chuyển răng rộng rãi như chỉnh nha. Đối với mặt dán sứ, một lớp men mỏng thường được loại bỏ khỏi bề mặt răng để mặt dán nằm khít, lấy dấu, và các lớp vỏ tùy chỉnh được chế tạo tại phòng lab trước khi được gắn cố định ở lần hẹn thứ hai; mặt dán composite thường có thể được tạo hình trực tiếp trên răng trong một buổi. Vì việc đặt mặt dán sứ loại bỏ một phần men răng tự nhiên, nó thường được coi là thay đổi thẩm mỹ vĩnh viễn cần bảo trì lâu dài. Mặt dán bền nhưng không phải bất khả xâm phạm, bệnh nhân thường được khuyên tránh cắn trực tiếp thức ăn rất cứng bằng răng có mặt dán. Các phòng khám nha khoa thẩm mỹ tại Ấn Độ thường sử dụng phần mềm thiết kế nụ cười kỹ thuật số để xem trước kết quả và phối màu, hình dạng mặt dán phù hợp với đặc điểm khuôn mặt bệnh nhân trước khi bắt đầu điều trị.',
			},
			{
				name: 'Thiết kế nụ cười Hollywood',
				description:
					'Thiết kế nụ cười Hollywood là một phương pháp nha khoa thẩm mỹ toàn diện kết hợp nhiều thủ thuật, thường nhất là mặt dán sứ hoặc mão răng, tẩy trắng răng và đôi khi tạo hình nướu, để tạo ra một nụ cười trắng đều và cân đối. Thay vì điều trị một chiếc răng hay một vấn đề đơn lẻ, quá trình bắt đầu bằng đánh giá toàn diện màu sắc, hình dạng, sự sắp xếp răng và đường viền nướu, thường được hỗ trợ bởi phần mềm thiết kế nụ cười kỹ thuật số cho phép bệnh nhân xem trước kết quả dự kiến trước khi chạm vào bất kỳ chiếc răng nào. Ứng viên thường là bệnh nhân muốn thay đổi thẩm mỹ đáng kể vì lý do như răng không đều, ố màu, khoảng cách hoặc đường viền nướu không đều, thay vì những người có một vấn đề nha khoa đơn lẻ. Điều trị thường bao gồm mài răng tối thiểu, chế tạo tại phòng lab các mặt dán hoặc mão tùy chỉnh phù hợp với màu sắc và hình dạng đã chọn, và các cuộc hẹn lắp theo từng giai đoạn để đạt kết quả tự nhiên nhưng được nâng cao. Vì đây là thủ thuật thẩm mỹ chứ không phải cần thiết về y tế, các buổi thảo luận lập kế hoạch tập trung nhiều vào kỳ vọng và tỷ lệ khuôn mặt của bệnh nhân. Các trung tâm nha khoa thẩm mỹ tại Ấn Độ thường đóng gói điều trị này cho bệnh nhân quốc tế, phối hợp lập kế hoạch kỹ thuật số, công việc phòng lab và các cuộc hẹn lắp để toàn bộ quá trình chuyển đổi có thể hoàn tất trong một chuyến thăm kéo dài duy nhất.',
			},
			{
				name: 'Invisalign — Khay chỉnh nha trong suốt',
				description:
					'Invisalign sử dụng một chuỗi khay nhựa trong suốt, tháo lắp được, chế tạo riêng để dần dần di chuyển răng vào vị trí thẳng hơn, mang lại giải pháp thay thế cho niềng răng kim loại truyền thống trong điều trị khấp khểnh, khoảng cách và một số bất thường khớp cắn. Điều trị bắt đầu bằng quét kỹ thuật số hoặc lấy dấu răng, được dùng để tạo kế hoạch điều trị 3D cho thấy chuyển động dự kiến của từng răng qua một chuỗi các giai đoạn khay; một khay mới được đeo khoảng mỗi một đến hai tuần, mỗi khay dịch chuyển răng gần hơn đến vị trí cuối cùng. Vì các khay trong suốt và có thể tháo ra khi ăn uống và vệ sinh, chúng thường được chọn bởi bệnh nhân người lớn hoặc những người muốn lựa chọn kín đáo hơn niềng răng cố định. Các điểm gắn nhỏ màu răng có thể được dán vào một số răng để giúp khay bám chắc và tác dụng lực chính xác hơn khi cần. Thời gian điều trị thay đổi tùy độ phức tạp của ca, từ vài tháng cho các chỉnh sửa nhỏ đến hơn một năm cho các trường hợp lệch lạc phức tạp hơn, cần các lần tái khám định kỳ để theo dõi tiến trình và cấp khay mới. Các phòng khám chỉnh nha tại Ấn Độ thường sử dụng quét 3D và phần mềm lập kế hoạch điều trị tại chỗ để thiết kế và theo dõi các ca Invisalign cho cả bệnh nhân địa phương và bệnh nhân đến thăm.',
			},
			{
				name: 'Snap-On Smile',
				description:
					'Snap-On Smile là một thiết bị nha khoa tháo lắp, không xâm lấn, làm từ nhựa nha khoa dẻo, vừa khít trực tiếp lên răng hiện có của bệnh nhân để cải thiện ngay vẻ ngoài nụ cười mà không cần khoan, mài hay gây mê. Nó được chế tạo riêng từ dấu răng của bệnh nhân để gắn chắc chắn lên răng tự nhiên, che phủ ố màu, sứt mẻ, khoảng cách hoặc lệch lạc, và có thể được bệnh nhân tự tháo và lắp lại tùy ý để vệ sinh hoặc ăn uống. Vì không có cấu trúc răng nào bị thay đổi, nó thường được chọn bởi bệnh nhân muốn một giải pháp thẩm mỹ có thể đảo ngược, một lựa chọn tạm thời trong khi cân nhắc các điều trị vĩnh viễn hơn như mặt dán sứ hoặc cấy ghép, hoặc một cách phải chăng để cải thiện vẻ ngoài nụ cười mà không cần phẫu thuật. Nó không phải là thay thế cho điều trị phục hồi trong các trường hợp sâu răng đang hoạt động, bệnh nướu hoặc mất răng cần thay thế chức năng, và nói chung không dành cho việc nhai thường xuyên thức ăn rất cứng. Việc lắp thường cần hai lần hẹn: một để lấy dấu và chọn màu, và lần thứ hai để lắp và điều chỉnh khi thiết bị đã được chế tạo. Các phòng khám nha khoa tại Ấn Độ thường cung cấp đây như một lựa chọn thẩm mỹ nhanh cho bệnh nhân muốn cải thiện nụ cười trong cùng chuyến đi mà không cần cam kết thay đổi răng vĩnh viễn.',
			},
			{
				name: 'Tẩy trắng răng',
				description:
					'Tẩy trắng răng là một thủ thuật thẩm mỹ làm sáng màu răng bằng cách phá vỡ các hợp chất gây ố trong men răng và ngà răng bên dưới, thường sử dụng gel chứa peroxide. Tẩy trắng tại phòng khám bao gồm việc nha sĩ bôi gel nồng độ cao hơn lên răng, đôi khi được kích hoạt bằng đèn đặc biệt, trong điều kiện kiểm soát bảo vệ nướu, tạo ra thay đổi rõ rệt chỉ trong một lần hẹn kéo dài khoảng một giờ. Bộ tẩy trắng mang về nhà sử dụng khay vừa riêng và gel nồng độ thấp hơn đeo trong khoảng thời gian nhất định hàng ngày trong một đến hai tuần, mang lại kết quả dần dần hơn mà bệnh nhân có thể tự quản lý theo tốc độ của mình. Bệnh nhân thường tìm đến tẩy trắng để giải quyết ố màu từ cà phê, trà, thuốc lá, tuổi tác hoặc một số loại thuốc, mặc dù kết quả thay đổi tùy nguyên nhân và mức độ ố màu ban đầu, và tẩy trắng không làm thay đổi màu của mão răng, mặt dán hay miếng trám, có thể tạo ra sự không khớp màu nếu không được lên kế hoạch trước. Ê buốt răng nhẹ trong hoặc sau điều trị là phổ biến và thường tạm thời. Các phòng khám nha khoa tại Ấn Độ thường kết hợp tẩy trắng tại phòng khám với bộ duy trì mang về nhà để bệnh nhân quốc tế có thể đạt kết quả ngay trước khi về nước và duy trì sau đó.',
			},
			{
				name: 'Chỉnh nha',
				description:
					'Chỉnh nha là chuyên khoa nha khoa tập trung chẩn đoán và điều chỉnh răng và hàm lệch lạc, sử dụng các khí cụ như niềng răng kim loại hoặc sứ truyền thống, khay trong suốt hoặc thiết bị chức năng để dần dần di chuyển răng hoặc hướng dẫn sự phát triển của hàm vào vị trí cân đối hơn. Điều trị thường được khuyến nghị cho tình trạng khấp khểnh, khoảng cách, khớp cắn sâu, khớp cắn ngược, khớp cắn chéo hoặc lệch hàm ảnh hưởng đến việc nhai, phát âm, vệ sinh răng miệng hoặc sức khỏe răng miệng lâu dài, và có thể thực hiện ở hầu như mọi lứa tuổi, mặc dù đánh giá sớm từ thời thơ ấu đôi khi có thể đơn giản hóa điều trị sau này. Quá trình thường bắt đầu bằng khám lâm sàng, chụp X-quang và lấy dấu kỹ thuật số hoặc vật lý để lập kế hoạch di chuyển răng, sau đó là lắp niềng răng hoặc khay và các lần tái khám điều chỉnh định kỳ, thường mỗi bốn đến tám tuần, trong giai đoạn điều trị có thể kéo dài từ vài tháng đến vài năm tùy độ phức tạp. Trong một số trường hợp liên quan đến sự khác biệt hàm đáng kể, điều trị chỉnh nha được kết hợp với phẫu thuật chỉnh hàm để có kết quả hoàn chỉnh hơn. Sau điều trị tích cực, thường cần đeo hàm duy trì để giữ vị trí răng mới. Các trung tâm chỉnh nha tại Ấn Độ thường cung cấp đầy đủ các lựa chọn từ niềng răng truyền thống đến hệ thống khay trong suốt, với công cụ lập kế hoạch kỹ thuật số được sử dụng để vạch ra điều trị trước khi bắt đầu.',
			},
			{
				name: 'Nha chu',
				description:
					'Nha chu là chuyên khoa nha khoa liên quan đến các cấu trúc hỗ trợ răng, cụ thể là nướu, dây chằng nha chu và xương xung quanh, tập trung vào phòng ngừa, chẩn đoán và điều trị bệnh nướu từ viêm nướu nhẹ đến viêm nha chu tiến triển. Điều trị thường bắt đầu bằng các phương pháp không phẫu thuật như làm sạch sâu, gọi là cạo vôi và làm nhẵn chân răng, loại bỏ mảng bám và cao răng dưới đường viền nướu để giảm viêm và nhiễm trùng. Khi bệnh đã tiến triển nặng hơn, gây tụt nướu, mất xương hoặc túi sâu quanh răng, các lựa chọn phẫu thuật như phẫu thuật vạt nướu, ghép xương hoặc ghép nướu có thể được sử dụng để loại bỏ mô nhiễm trùng, tái tạo xương đã mất hoặc che phủ chân răng lộ. Bệnh nhân thường cần chăm sóc nha chu khi nhận thấy chảy máu nướu, hôi miệng dai dẳng, tụt nướu hoặc răng lung lay, tất cả đều có thể chỉ ra nhiễm trùng tiềm ẩn mà nếu không điều trị có thể dẫn đến mất răng. Các bác sĩ nha chu cũng đóng vai trò quan trọng trong việc chuẩn bị nướu và xương trước khi đặt trụ cấy ghép răng. Các trung tâm nha khoa tại Ấn Độ thường tích hợp đánh giá nha chu vào lập kế hoạch điều trị cấy ghép và thẩm mỹ, vì mô nướu và xương khỏe mạnh là yếu tố thiết yếu cho sự thành công lâu dài của hầu hết các thủ thuật phục hồi.',
			},
			{
				name: 'Nha khoa an thần',
				description:
					'Nha khoa an thần sử dụng thuốc để giúp bệnh nhân thư giãn trong các thủ thuật nha khoa, từ các lựa chọn giảm lo âu nhẹ đến mức an thần sâu hơn, và thường được cung cấp cho bệnh nhân có lo âu nha khoa đáng kể, phản xạ nôn mạnh, nhạy cảm với đau, hoặc những người trải qua các thủ thuật kéo dài hoặc phức tạp như nhổ nhiều răng hoặc phẫu thuật cấy ghép toàn hàm. Các lựa chọn phổ biến bao gồm khí cười (nitơ oxit), hít vào và hết tác dụng nhanh, thuốc an thần uống dùng trước cuộc hẹn để có trạng thái bình tĩnh, buồn ngủ, và an thần tĩnh mạch, được thực hiện bởi chuyên gia được đào tạo và cho phép thư giãn sâu hơn trong khi bệnh nhân vẫn tự thở và phản ứng với hướng dẫn. Đối với các thủ thuật phẫu thuật rộng hơn, gây mê toàn thân đôi khi có thể được sử dụng dưới sự giám sát của bác sĩ gây mê. Trong suốt quá trình an thần, các dấu hiệu sinh tồn như nhịp tim, huyết áp và nồng độ oxy thường được theo dõi để đảm bảo an toàn cho bệnh nhân. Lựa chọn mức độ an thần phụ thuộc vào độ phức tạp của thủ thuật, mức độ lo âu của bệnh nhân và tiền sử sức khỏe tổng thể. Các phòng khám nha khoa tại Ấn Độ cung cấp các lựa chọn an thần cho các thủ thuật phức tạp như cấy ghép toàn hàm thường có hỗ trợ gây mê đủ trình độ tại chỗ, cho phép bệnh nhân quốc tế hoàn tất các buổi điều trị kéo dài một cách thoải mái trong một chuyến thăm duy nhất.',
			},
		],
		benefits: [
			'Thiết kế nụ cười kỹ thuật số và mão răng CAD/CAM trong ngày',
			'Phục hồi toàn diện bằng cấy ghép hoàn tất chỉ trong một chuyến đi',
			'Vật liệu cấy ghép đẳng cấp quốc tế được sử dụng cho mọi trường hợp',
			'Kết hợp điều trị với thời gian hồi phục gần phòng khám',
		],
		flagshipProcedure: 'Cấy ghép toàn hàm răng',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '2–4 tuần', successRate: '95–97%' },
			{ country: 'Vương quốc Anh', waitTime: '3–6 tuần', successRate: '95–97%' },
			{ country: 'Đức', waitTime: '2–4 tuần', successRate: '94–96%' },
			{ country: 'Thái Lan', waitTime: '1–2 tuần', successRate: '93–95%' },
			{ country: 'Ấn Độ', waitTime: '3–5 ngày', successRate: '95%+' },
		],
		inclusions: [
			'Tư vấn thiết kế nụ cười kỹ thuật số và quét 3D',
			'Chi phí nha sĩ cho việc đặt cấy ghép hoặc phục hồi',
			'Trụ cấy ghép và trụ nối chất lượng tiêu chuẩn',
			'Chế tác mão răng CAD/CAM trong ngày, khi phù hợp',
			'Gây tê tại chỗ và chi phí thủ thuật vô trùng',
			'Một buổi tái khám để kiểm tra quá trình lành thương và độ khít',
		],
		exclusions: [
			'Ghép xương hoặc nâng xoang, nếu không được xác định trong lần quét ban đầu',
			'Nâng cấp cấy ghép cao cấp ngoài trụ tiêu chuẩn',
			'Mão răng, mặt dán sứ hoặc phục hồi bổ sung ngoài kế hoạch điều trị đã thống nhất',
			'Điều trị chỉnh nha hoặc căn chỉnh răng trước khi đặt cấy ghép',
			'Buổi tái khám ngoài buổi đã bao gồm',
		],
		faqs: [
			{
				question: 'Cấy ghép răng tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Một trụ cấy ghép răng đơn tại Ấn Độ bắt đầu từ 800 USD, thấp hơn khoảng 80% so với Mỹ, bao gồm tư vấn, đặt cấy ghép và mão răng CAD/CAM trong ngày, khi phù hợp.',
			},
			{
				question: 'Phục hồi toàn bộ răng miệng có thể hoàn tất trong một chuyến đi không?',
				answer:
					'Có, sử dụng thiết kế nụ cười kỹ thuật số và công nghệ mão răng trong ngày, hầu hết các trường hợp cấy ghép toàn hàm có thể hoàn tất trong một chuyến đi 7–10 ngày, so với nhiều tháng thường cần khi điều trị theo giai đoạn ở nước ngoài.',
			},
			{
				question: 'Những thương hiệu cấy ghép nào được sử dụng?',
				answer:
					'Các trung tâm nha khoa đối tác của chúng tôi sử dụng tiêu chuẩn là các thương hiệu cấy ghép được chứng nhận quốc tế, với nâng cấp lên thương hiệu cao cấp theo yêu cầu.',
			},
			{
				question: 'Thủ thuật có đau không?',
				answer:
					'Việc đặt cấy ghép được thực hiện dưới gây tê tại chỗ và thường được dung nạp tốt, hầu hết bệnh nhân trở lại hoạt động bình thường sau một hoặc hai ngày.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết các trường hợp cấy ghép và phục hồi cần khoảng 7–10 ngày tại Ấn Độ để đặt cấy ghép, thực hiện mão răng trong ngày và tái khám trước khi về nước.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ phim X-quang nha khoa gần đây hoặc hình ảnh răng của bạn qua biểu mẫu liên hệ, điều phối viên nha khoa của chúng tôi sẽ sắp xếp xem xét và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	'eye-care': {
		name: 'Nhãn khoa',
		shortDescription: 'Phẫu thuật đục thủy tinh thể và chỉnh thị lực, xuất viện trong ngày ở hầu hết các trường hợp.',
		overview:
			'Các bệnh viện nhãn khoa tại Ấn Độ thực hiện các thủ thuật đục thủy tinh thể và khúc xạ với khối lượng cực lớn, mang đến cho các bác sĩ phẫu thuật kinh nghiệm sâu rộng về kỹ thuật không dùng dao, hỗ trợ laser, xuất viện trong ngày cho hầu hết bệnh nhân.',
		procedures: ['Phẫu thuật đục thủy tinh thể', 'LASIK', 'Điều trị võng mạc'],
		benefits: [
			'Phẫu thuật đục thủy tinh thể không dùng dao, hỗ trợ laser',
			'Xuất viện trong ngày cho hầu hết các thủ thuật',
			'Trung tâm khối lượng lớn với kinh nghiệm phẫu thuật sâu rộng',
			'Có tùy chọn thủy tinh thể nhân tạo cao cấp',
		],
		flagshipProcedure: 'Phẫu thuật đục thủy tinh thể (phaco)',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '2–4 tuần', successRate: '98–99%' },
			{ country: 'Vương quốc Anh', waitTime: '8–18 tuần (NHS)', successRate: '98–99%' },
			{ country: 'Đức', waitTime: '2–4 tuần', successRate: '97–99%' },
			{ country: 'Thái Lan', waitTime: '1–2 tuần', successRate: '97–98%' },
			{ country: 'Ấn Độ', waitTime: '2–4 ngày', successRate: '98%+' },
		],
		inclusions: [
			'Đánh giá mắt trước phẫu thuật, bao gồm đo sinh trắc và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ phẫu thuật cho ca phẫu thuật đục thủy tinh thể không dùng dao, hỗ trợ laser',
			'Thủy tinh thể nhân tạo (IOL) đơn tiêu chuẩn',
			'Chi phí phòng mổ và thủ thuật vô trùng',
			'Xuất viện trong ngày kèm thuốc nhỏ mắt sau phẫu thuật',
			'Một buổi tái khám để xác nhận quá trình lành thương và chỉnh thị lực',
		],
		exclusions: [
			'Nâng cấp IOL cao cấp (thủy tinh thể đa tiêu hoặc trụ) ngoài loại đơn tiêu chuẩn',
			'Điều trị các bệnh lý mắt không liên quan, như tăng nhãn áp hoặc bệnh võng mạc, được phát hiện khi đánh giá',
			'Phẫu thuật mắt còn lại, nếu không được báo giá cùng nhau',
			'Buổi tái khám ngoài buổi đã bao gồm',
			'Kính hoặc kính áp tròng sau thủ thuật',
		],
		faqs: [
			{
				question: 'Phẫu thuật đục thủy tinh thể tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Phẫu thuật đục thủy tinh thể tại Ấn Độ bắt đầu từ 700 USD mỗi mắt, thấp hơn khoảng 80% so với Mỹ, bao gồm đánh giá trước phẫu thuật, phẫu thuật hỗ trợ laser, một IOL tiêu chuẩn và buổi tái khám.',
			},
			{
				question: 'Ca can thiệp có không đau và nhanh chóng không?',
				answer:
					'Có, phẫu thuật đục thủy tinh thể hiện đại không dùng dao, hỗ trợ laser thường mất 15–20 phút mỗi mắt, dưới gây tê tại chỗ, hầu hết bệnh nhân được xuất viện trong ngày.',
			},
			{
				question: 'Tôi có thể chọn thủy tinh thể cao cấp (đa tiêu hoặc trụ) không?',
				answer:
					'Có, các tùy chọn thủy tinh thể nhân tạo cao cấp có sẵn cho bệnh nhân muốn giảm phụ thuộc vào kính sau thủ thuật — những loại này được báo giá riêng so với thủy tinh thể đơn tiêu chuẩn.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết bệnh nhân đục thủy tinh thể dự kiến khoảng 4–7 ngày tại Ấn Độ cho đánh giá trước phẫu thuật, ca can thiệp và một buổi tái khám trước khi về nước; LASIK có lịch trình ngắn tương tự.',
			},
			{
				question: 'LASIK có thể thực hiện cho cả hai mắt trong một lần đến không?',
				answer:
					'Có, LASIK và các thủ thuật khúc xạ khác thường được thực hiện cho cả hai mắt trong một lần đến, trong ngày, cho các ứng viên phù hợp, sau khi đánh giá trước phẫu thuật chi tiết.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ đơn kính mắt gần đây hoặc báo cáo hiện có của bạn qua biểu mẫu liên hệ, điều phối viên nhãn khoa của chúng tôi sẽ sắp xếp đánh giá chuyên môn và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	neurology: {
		name: 'Thần kinh học và phẫu thuật thần kinh',
		shortDescription: 'Chuyên gia về não, cột sống và dây thần kinh, điều trị khối u, đột quỵ và các rối loạn thần kinh phức tạp.',
		overview:
			'Các trung tâm phẫu thuật thần kinh tại Ấn Độ kết hợp kỹ thuật vi phẫu và định vị hình ảnh với khoa ICU thần kinh chuyên biệt, mang đến cho bệnh nhân quốc tế cơ hội tiếp cận chăm sóc tiên tiến cho khối u não và đột quỵ, không cần chờ đợi chuyên gia lâu như thường thấy ở các nước khác.',
		procedures: ['Phẫu thuật khối u não', 'Phẫu thuật động kinh', 'Chăm sóc đột quỵ'],
		detailedProcedures: [
			{
				name: 'Phẫu thuật khối u não',
				description:
					'Phẫu thuật khối u não là loại bỏ bằng phẫu thuật một khối mô bất thường trong hộp sọ, có thể lành tính hoặc ác tính, được thực hiện khi khối u gây triệu chứng như đau đầu, co giật, thay đổi thị lực, yếu liệt hoặc thay đổi tính cách, hoặc khi nó đe dọa chèn ép các cấu trúc não quan trọng. Phương pháp tiêu chuẩn là mở sọ, trong đó một phần xương sọ được tạm thời lấy ra để bác sĩ tiếp cận trực tiếp khối u; các kỹ thuật hiện đại dựa vào định vị thần kinh trong mổ, lập bản đồ bằng MRI hoặc CT, và đôi khi mổ sọ tỉnh với lập bản đồ não thời gian thực để loại bỏ tối đa khối u trong khi bảo vệ các vùng chịu trách nhiệm về ngôn ngữ, vận động hoặc cảm giác. Theo dõi thần kinh sinh lý trong mổ giúp giảm nguy cơ di chứng thần kinh mới. Tùy loại và vị trí khối u, phẫu thuật có thể tiếp theo bằng xạ trị hoặc hóa trị, mô lấy ra trong mổ được gửi phân tích giải phẫu bệnh để định hướng điều trị tiếp theo. Ấn Độ có mạng lưới lớn các trung tâm phẫu thuật thần kinh cung cấp mức độ công nghệ trong mổ này, là lựa chọn thực tế cho bệnh nhân quốc tế cần phẫu thuật khối u kỹ thuật tiên tiến, kịp thời. Hồi phục thường bao gồm nằm viện vài ngày, tiếp theo là phục hồi chức năng dần dần.',
			},
			{
				name: 'Điều trị ung thư não',
				description:
					'Điều trị ung thư não là quản lý phối hợp các khối u ác tính phát sinh trong não, hoặc khối u nguyên phát hình thành từ mô não, hoặc khối u thứ phát di căn từ ung thư nơi khác trong cơ thể. Lập kế hoạch điều trị thường bắt đầu bằng chẩn đoán hình ảnh chi tiết và thường là sinh thiết để xác định loại và độ ác tính khối u, sau đó đội ngũ đa chuyên khoa gồm bác sĩ phẫu thuật thần kinh, bác sĩ ung bướu và chuyên gia xạ trị quyết định phối hợp phù hợp nhất giữa phẫu thuật, xạ trị và hóa trị hoặc liệu pháp thuốc nhắm trúng đích. Phẫu thuật nhằm loại bỏ tối đa mô khối u an toàn mà không làm tổn hại mô não lành xung quanh, trong khi xạ trị, được thực hiện theo cách thông thường hoặc qua các kỹ thuật tập trung như xạ phẫu định vị, nhắm vào tế bào còn sót lại hoặc không thể tiếp cận. Hóa trị và các thuốc nhắm trúng đích hoặc miễn dịch trị liệu mới hơn có thể được dùng tùy hồ sơ phân tử khối u. Vì chăm sóc ung thư não đòi hỏi phối hợp chặt chẽ giữa nhiều chuyên khoa và chụp hình ảnh lặp lại, bệnh nhân đi Ấn Độ điều trị được hưởng lợi từ các trung tâm quy tụ các đội ngũ này dưới một mái nhà. Theo dõi liên tục bằng chụp hình ảnh và đánh giá thần kinh tiếp tục lâu dài sau điều trị ban đầu để theo dõi đáp ứng và phát hiện sớm tái phát.',
			},
			{
				name: 'Phẫu thuật khối u tuyến yên',
				description:
					'Phẫu thuật khối u tuyến yên loại bỏ các khối u bất thường trên tuyến yên, cấu trúc nội tiết nhỏ nằm ở nền não phía sau mũi, có thể gây vấn đề bằng cách tiết nội tiết tố quá mức hoặc chèn ép các cấu trúc lân cận như dây thần kinh thị giác, dẫn đến mất thị lực hoặc mất cân bằng nội tiết. Kỹ thuật phổ biến nhất là tiếp cận qua xoang bướm bằng nội soi, trong đó bác sĩ tiếp cận khối u qua đường mũi và xoang bướm bằng ống nội soi mỏng có camera, tránh mọi đường rạch bên ngoài hoặc cần mở sọ. Đường tiếp cận này cho phép quan sát rõ ràng khối u trong khi bảo tồn tối đa mô tuyến lành xung quanh. Một số khối u lớn hơn hoặc phức tạp hơn có thể cần kết hợp cả kỹ thuật nội soi và mổ mở. Sau phẫu thuật, bệnh nhân được theo dõi nồng độ nội tiết và có thể cần liệu pháp thay thế nội tiết ngắn hạn hoặc dài hạn tùy lượng mô tuyến lành còn lại. Hồi phục từ phương pháp nội soi thường nhanh hơn mổ mở truyền thống, các trung tâm phẫu thuật thần kinh tại Ấn Độ được trang bị đầy đủ thiết bị nội soi và theo dõi nội tiết cần thiết cho thủ thuật này.',
			},
			{
				name: 'Phẫu thuật não qua nội soi',
				description:
					'Phẫu thuật não qua nội soi là kỹ thuật phẫu thuật thần kinh xâm lấn tối thiểu dùng ống nội soi mỏng, cứng hoặc mềm, gắn camera và nguồn sáng để tiếp cận và điều trị các tình trạng sâu trong não qua các lỗ nhỏ thay vì mở sọ lớn. Các ứng dụng phổ biến gồm loại bỏ một số khối u, điều trị não úng thủy bằng cách tạo đường dẫn mới cho dịch não tủy, dẫn lưu nang, và tiếp cận tuyến yên qua đường mũi. Bác sĩ dẫn ống nội soi qua các hành lang tự nhiên hẹp hoặc một lỗ xương nhỏ trong khi quan sát hình ảnh phóng đại, độ phân giải cao trên màn hình, cho phép thao tác dụng cụ chính xác với sự xáo trộn tối thiểu đến mô não xung quanh. Vì đường rạch và lượng xương lấy ra nhỏ hơn nhiều so với mổ mở thông thường, bệnh nhân thường ít đau sau mổ, mất máu ít hơn và nằm viện ngắn hơn. Không phải mọi bệnh lý não đều phù hợp với phương pháp nội soi, quyết định phụ thuộc kích thước, vị trí và tính chất tổn thương. Các trung tâm phẫu thuật thần kinh lớn tại Ấn Độ cung cấp công nghệ này cùng hỗ trợ hình ảnh và gây mê thần kinh cần thiết, giúp bệnh nhân từ nước ngoài tiếp cận chăm sóc tiên tiến, ít xâm lấn hơn.',
			},
			{
				name: 'Điều trị phình động mạch não',
				description:
					'Phình động mạch não là vùng thành mạch máu trong não bị suy yếu, phình to, có nguy cơ vỡ và chảy máu đe dọa tính mạng, điều trị nhằm bịt kín khối phình khỏi tuần hoàn máu bình thường trước khi hoặc sau khi vỡ xảy ra. Hai phương pháp chính được dùng: kẹp vi phẫu, trong đó bác sĩ mở sọ và đặt một kẹp kim loại nhỏ ngang qua gốc khối phình để ngăn máu chảy vào nó, và nút mạch nội mạch, kỹ thuật dùng ống thông luồn các cuộn dây platinum mềm hoặc thiết bị hỗ trợ giá đỡ qua mạch máu từ bẹn hoặc cổ tay đến khối phình để nhồi đầy và thúc đẩy đông máu. Lựa chọn giữa hai phương pháp phụ thuộc kích thước, hình dạng, vị trí khối phình và sức khỏe tổng thể bệnh nhân. Điều trị nội mạch ít xâm lấn hơn và thường cho phép hồi phục nhanh hơn, trong khi kẹp vi phẫu có thể được ưu tiên cho một số khối phình phức tạp. Cả hai phương pháp đều cần chẩn đoán hình ảnh tiên tiến như CT hoặc chụp mạch bằng ống thông để lập kế hoạch, các trung tâm thần kinh mạch máu chuyên khoa tại Ấn Độ cung cấp cả lựa chọn phẫu thuật và nội mạch cùng theo dõi tích cực cần thiết sau đó.',
			},
			{
				name: 'Xử trí đột quỵ não',
				description:
					'Xử trí đột quỵ não bao gồm chẩn đoán và điều trị khẩn cấp đột quỵ, xảy ra khi cục máu đông chặn một động mạch cấp máu cho não, gọi là đột quỵ thiếu máu cục bộ, hoặc khi một mạch máu trong não vỡ và chảy máu, gọi là đột quỵ xuất huyết. Vì mô não rất nhạy cảm với thời gian mất cấp máu, xử trí ban đầu tập trung vào chẩn đoán hình ảnh nhanh, thường là CT hoặc MRI, để xác định loại và mức độ đột quỵ, tiếp theo là điều trị như thuốc tan cục máu đông hoặc lấy huyết khối cơ học, thủ thuật dùng ống thông để loại bỏ vật lý cục máu đông, cho đột quỵ thiếu máu cục bộ, hoặc can thiệp phẫu thuật hay nội mạch để kiểm soát chảy máu và giảm áp lực trong đột quỵ xuất huyết. Bệnh nhân thường được chăm sóc tại đơn vị đột quỵ chuyên biệt hoặc khoa hồi sức thần kinh tích cực, nơi huyết áp, nồng độ oxy và tình trạng thần kinh được theo dõi sát sao. Khi bệnh nhân ổn định, phục hồi chức năng gồm vật lý trị liệu, hoạt động trị liệu và ngôn ngữ trị liệu trở thành trọng tâm để khôi phục chức năng đã mất. Các bệnh viện lớn tại Ấn Độ duy trì đội ngũ ứng phó đột quỵ hoạt động liên tục và đơn vị hồi sức thần kinh tích cực, điều quan trọng cho cả bệnh nhân tại chỗ và bệnh nhân đi điều trị cần chăm sóc trong khung thời gian hẹp này.',
			},
			{
				name: 'Điều trị động kinh',
				description:
					'Điều trị động kinh giải quyết tình trạng thần kinh đặc trưng bởi các cơn co giật tái phát, không do kích thích, gây ra bởi hoạt động điện bất thường trong não, quản lý bắt đầu bằng xác định loại và tần suất cơn qua tiền sử lâm sàng, ghi điện não đồ (EEG) và chẩn đoán hình ảnh như MRI để tìm nguyên nhân cấu trúc nền. Hầu hết bệnh nhân trước tiên được điều trị bằng một hoặc nhiều thuốc chống co giật, điều chỉnh theo thời gian để kiểm soát cơn với tác dụng phụ tối thiểu. Khi cơn vẫn tiếp diễn dù đã thử đủ các thuốc, bệnh nhân có thể được đánh giá cho các lựa chọn phẫu thuật, bao gồm loại bỏ một vùng não nhỏ được xác định là ổ gây cơn, hoặc cấy thiết bị như máy kích thích dây thần kinh phế vị để giảm tần suất cơn. Đánh giá cho phẫu thuật thường bao gồm theo dõi video-điện não đồ kéo dài để xác định chính xác nơi cơn khởi phát, cùng chẩn đoán hình ảnh chi tiết và đánh giá tâm thần kinh. Chế độ ăn ketogenic đôi khi được dùng như lựa chọn bổ sung, đặc biệt ở trẻ em bị động kinh kháng thuốc. Ấn Độ cung cấp các đơn vị theo dõi động kinh toàn diện với video-điện não đồ từ xa và chương trình phẫu thuật, cho phép bệnh nhân có cơn khó kiểm soát được đánh giá và lập kế hoạch điều trị toàn diện tại một địa điểm.',
			},
			{
				name: 'Phẫu thuật dao Gamma',
				description:
					'Phẫu thuật dao Gamma là hình thức xạ phẫu định vị điều trị khối u não, dị dạng mạch máu và một số rối loạn chức năng não mà không cần rạch da, dùng khoảng hai trăm chùm tia gamma được tập trung chính xác từ nhiều góc độ hội tụ vào mục tiêu trong khi bảo vệ mô lành xung quanh. Trước điều trị, một khung hoặc mặt nạ định vị nhẹ được gắn vào đầu bệnh nhân để giữ cố định hoàn toàn và cung cấp tọa độ chính xác, sau đó hình ảnh MRI hoặc CT được dùng để lập bản đồ chi tiết vùng mục tiêu. Các chùm tia xạ được nhắm sao cho mỗi chùm riêng lẻ mang liều thấp qua mô não lành, trong khi điểm chúng giao nhau nhận liều điều trị tập trung. Vì không xâm lấn, điều trị dao Gamma thường hoàn thành trong một buổi ngoại trú kéo dài vài giờ, không cần gây mê toàn thân và thời gian hồi phục rất ngắn so với mổ mở. Kỹ thuật này thường dùng cho khối u não nhỏ đến trung bình, dị dạng động tĩnh mạch và đau dây thần kinh sinh ba. Các trung tâm dao Gamma tại Ấn Độ cho phép bệnh nhân quốc tế hoàn thành toàn bộ đợt điều trị, từ chẩn đoán hình ảnh đến liệu pháp, trong một chuyến thăm ngắn.',
			},
			{
				name: 'Điều trị xạ trị bằng CyberKnife',
				description:
					'CyberKnife là hệ thống xạ phẫu bằng robot dùng để cung cấp liều xạ cao, định hướng chính xác đến khối u và mô bất thường khác trong não và cột sống mà không cắt da, dùng máy gia tốc tuyến tính nhỏ gọn gắn trên cánh tay robot có thể nhắm chùm tia từ hàng nghìn góc độ khác nhau. Khác với hệ thống dùng khung cố định, CyberKnife theo dõi liên tục vị trí mục tiêu trong suốt quá trình điều trị bằng hình ảnh tích hợp, tự động điều chỉnh các chuyển động nhỏ, nghĩa là không cần vặn khung đầu cứng vào hộp sọ trước. Điều này phù hợp cho khối u gần các cấu trúc nhạy cảm như thân não hay tủy sống, nơi không thể hy sinh biên mô lành rộng. Lập kế hoạch điều trị dùng hình ảnh MRI và CT kết hợp để phác họa mục tiêu chính xác, xạ trị thường được thực hiện qua một đến năm buổi ngoại trú thay vì nhiều tuần điều trị như xạ trị thông thường. Mỗi buổi không đau và không cần gây mê, thường dưới hai giờ, sau đó bệnh nhân có thể trở lại hoạt động bình thường. Lịch trình rút ngắn này đặc biệt thuận tiện cho bệnh nhân đi Ấn Độ từ nước ngoài, vì giới hạn thời gian lưu trú cần thiết để hoàn thành toàn bộ đợt xạ trị.',
			},
			{
				name: 'Xạ phẫu định vị',
				description:
					'Xạ phẫu định vị là thuật ngữ chung cho một nhóm kỹ thuật, bao gồm hệ thống dao Gamma và CyberKnife, cung cấp liều xạ tập trung cao đến một mục tiêu được xác định chính xác trong não hoặc cột sống bằng tọa độ ba chiều; dù tên gọi có từ "phẫu thuật", kỹ thuật này không liên quan đến bất kỳ vết cắt hay rạch nào. Kỹ thuật dựa vào chẩn đoán hình ảnh chi tiết, thường là MRI và CT kết hợp, để lập bản đồ chính xác kích thước, hình dạng và vị trí mục tiêu, dù là khối u, dị dạng mạch máu hay vùng hoạt động thần kinh bất thường, sau đó nhắm nhiều chùm xạ từ các hướng khác nhau sao cho chỉ chồng lấp tại mục tiêu, giảm thiểu liều đến mô lành xung quanh. Nhờ độ chính xác này, điều trị thường có thể hoàn thành trong một buổi hoặc vài buổi thay vì nhiều tuần như xạ trị thông thường. Kỹ thuật thường dùng cho khối u não nhỏ đến trung bình, một số dị dạng mạch máu và các trường hợp tổn thương nằm gần cấu trúc khiến mổ mở rủi ro. Các trung tâm xạ phẫu lớn tại Ấn Độ cung cấp các công nghệ này cùng hỗ trợ hình ảnh và vật lý y khoa cần thiết để lập kế hoạch chính xác, cho phép bệnh nhân nước ngoài hoàn thành điều trị trong một chuyến thăm ngắn gọn.',
			},
			{
				name: 'Kích thích não sâu',
				description:
					'Kích thích não sâu, hay DBS, là phương pháp điều trị phẫu thuật trong đó các điện cực mảnh được cấy vào các vùng sâu cụ thể của não điều hòa vận động, như nhân dưới đồi hoặc cầu nhạt, kết nối bằng dây dẫn dưới da đến một máy phát xung nhỏ đặt gần xương đòn, tương tự khái niệm máy tạo nhịp tim. Thiết bị phát xung điện liên tục, có thể điều chỉnh, giúp điều hòa hoạt động não bất thường gây ra các triệu chứng như run, cứng cơ và chậm vận động. Kỹ thuật này thường dùng nhất cho bệnh Parkinson khi thuốc đơn thuần không còn kiểm soát triệu chứng đầy đủ hoặc gây tác dụng phụ đáng kể, cũng dùng cho run vô căn và một số dạng loạn trương lực cơ. Thủ thuật thường được thực hiện với sự hỗ trợ của định vị hình ảnh và, trong một số trường hợp, kiểm tra trong mổ để xác nhận vị trí điện cực chính xác trước khi cố định dây dẫn. Sau khi cấy, cài đặt máy kích thích có thể được điều chỉnh từ bên ngoài qua các lần tái khám để tối ưu kiểm soát triệu chứng trong khi giảm thiểu tác dụng phụ. Các trung tâm rối loạn vận động tại Ấn Độ cung cấp DBS cùng theo dõi thần kinh sinh lý và hỗ trợ lập trình dài hạn mà bệnh nhân, kể cả người đi từ nước ngoài, cần trước và sau khi cấy.',
			},
			{
				name: 'Phẫu thuật kích thích vỏ não',
				description:
					'Phẫu thuật kích thích vỏ não đặt điện cực trực tiếp lên hoặc ngay dưới bề mặt lớp vỏ ngoài của não để phát xung điện có kiểm soát, có thể điều chỉnh hoạt động bất thường hoặc giúp lập bản đồ chức năng não trong các thủ thuật khác. Trong quản lý đau mạn tính, điện cực được đặt trên vỏ não vận động và kết nối với máy phát xung cấy ghép để giúp giảm một số tình trạng đau kháng trị bằng cách thay đổi cách tín hiệu đau được xử lý. Trong chăm sóc động kinh, lưới điện cực vỏ não tạm thời đôi khi được đặt trong một thủ thuật riêng để lập bản đồ chính xác các vùng chịu trách nhiệm vận động, cảm giác hoặc ngôn ngữ trước khi lập kế hoạch loại bỏ khối u hoặc ổ gây cơn, giảm nguy cơ tổn hại chức năng não thiết yếu. Bệnh nhân phù hợp cho kích thích vỏ não thường được chọn sau khi các điều trị khác không giảm đau đầy đủ, quyết định cần đánh giá cẩn thận bởi đội ngũ chuyên khoa cùng chẩn đoán hình ảnh xác nhận vị trí điện cực chính xác. Hồi phục tùy thuộc chỉ định cụ thể, cấy ghép vĩnh viễn cần giai đoạn điều chỉnh và lập trình theo dõi. Các trung tâm phẫu thuật thần kinh tại Ấn Độ thực hiện thủ thuật này kết hợp theo dõi thần kinh sinh lý trong mổ với đội ngũ phẫu thuật giàu kinh nghiệm, hỗ trợ cả lập bản đồ chẩn đoán và liệu pháp kích thích dài hạn cho bệnh nhân được chọn phù hợp.',
			},
			{
				name: 'Điều trị bệnh Parkinson',
				description:
					'Điều trị bệnh Parkinson tập trung quản lý các triệu chứng vận động và ngoài vận động của bệnh lý thần kinh tiến triển này, do mất dần các tế bào thần kinh sản xuất dopamine ở một vùng não kiểm soát vận động. Ở giai đoạn sớm, điều trị thường tập trung vào thuốc, phổ biến nhất là levodopa kết hợp các thuốc khác giúp điều hòa nồng độ dopamine và kiểm soát triệu chứng như run, cứng cơ, chậm vận động và khó khăn giữ thăng bằng. Khi bệnh tiến triển, thuốc có thể kém hiệu quả hơn hoặc gây dao động trong kiểm soát triệu chứng, lúc đó một số bệnh nhân được cân nhắc các lựa chọn phẫu thuật như kích thích não sâu, nơi điện cực cấy vào vùng não cụ thể phát xung điện giúp làm mượt triệu chứng vận động. Cùng với điều trị nội và ngoại khoa, vật lý trị liệu, hoạt động trị liệu và ngôn ngữ trị liệu đóng vai trò quan trọng duy trì vận động, chức năng hàng ngày và giao tiếp theo thời gian. Vì bệnh Parkinson ảnh hưởng mỗi người khác nhau, chăm sóc thường được cá nhân hóa và đánh giá định kỳ bởi bác sĩ thần kinh am hiểu rối loạn vận động. Các trung tâm thần kinh tại Ấn Độ cung cấp kết hợp quản lý nội khoa, đánh giá phẫu thuật và liệu pháp hỗ trợ, cùng theo dõi liên tục cần thiết được xử lý tinh tế cho bệnh nhân và gia đình.',
			},
			{
				name: 'Kích thích dây thần kinh phế vị (VNS)',
				description:
					'Kích thích dây thần kinh phế vị, hay VNS, là phương pháp điều trị trong đó một thiết bị nhỏ giống máy tạo nhịp tim được cấy dưới da ngực trên và kết nối bằng dây dẫn mảnh đến dây thần kinh phế vị ở cổ, nơi nó phát xung điện nhẹ, đều đặn để giúp giảm tần suất và mức độ nghiêm trọng của cơn co giật. Thường được cân nhắc cho bệnh nhân động kinh có cơn không đáp ứng đầy đủ với thuốc chống co giật và không phải ứng viên tốt cho, hoặc không được hưởng lợi từ, phẫu thuật cắt bỏ não. Liệu pháp VNS cũng đã được chấp thuận cho một số trường hợp trầm cảm kháng trị. Bản thân thủ thuật cấy ghép tương đối ngắn, thường thực hiện dưới gây mê toàn thân, thiết bị được đặt qua hai đường rạch nhỏ, một ở ngực và một ở cổ. Sau khi kích hoạt, cài đặt kích thích có thể được điều chỉnh từ bên ngoài bởi chuyên gia dùng bộ lập trình cầm tay để cân bằng kiểm soát triệu chứng với tác dụng phụ như thay đổi giọng nói hoặc khó chịu họng. Vì VNS không phải phương pháp chữa khỏi mà là cách giảm gánh nặng cơn co giật theo thời gian, cần theo dõi liên tục, các trung tâm động kinh tại Ấn Độ cung cấp cả thủ thuật cấy ghép và lập trình dài hạn mà liệu pháp này phụ thuộc vào.',
			},
			{
				name: 'Phẫu thuật dây thần kinh ngoại biên',
				description:
					'Phẫu thuật dây thần kinh ngoại biên điều trị chấn thương hoặc rối loạn ảnh hưởng đến các dây thần kinh nằm ngoài não và tủy sống, dẫn truyền tín hiệu đến và từ chi, mặt và thân người, bao gồm nhiều thủ thuật tùy vấn đề nền. Các chỉ định phổ biến gồm hội chứng chèn ép dây thần kinh như hội chứng ống cổ tay hoặc hội chứng ống khuỷu tay, nơi mô xung quanh chèn ép dây thần kinh và phẫu thuật nhằm giải phóng áp lực đó; chấn thương dây thần kinh do tai nạn hoặc vết rách, có thể cần sửa chữa trực tiếp hoặc ghép bằng đoạn dây thần kinh lấy từ nơi khác trong cơ thể; và khối u dây thần kinh, được loại bỏ cẩn thận trong khi bảo tồn tối đa chức năng thần kinh bình thường. Bác sĩ phẫu thuật thường dựa vào kính hiển vi phẫu thuật để phóng đại và, với một số trường hợp, theo dõi thần kinh trong mổ để hướng dẫn sửa chữa hoặc giải ép chính xác. Hồi phục và mức độ phục hồi chức năng phụ thuộc nhiều vào loại, vị trí và thời gian tổn thương dây thần kinh, vì dây thần kinh tái sinh chậm và đôi khi không hoàn toàn. Vật lý trị liệu và hoạt động trị liệu sau phẫu thuật hỗ trợ phục hồi sức mạnh và cảm giác. Các đơn vị phẫu thuật tay và dây thần kinh ngoại biên tại Ấn Độ kết hợp chuyên môn vi phẫu với chương trình phục hồi chức năng bài bản phù hợp cả bệnh nhân tại chỗ và đi điều trị.',
			},
			{
				name: 'Điều trị viêm dây thần kinh',
				description:
					'Viêm dây thần kinh là tình trạng viêm một dây thần kinh hoặc nhóm dây thần kinh, có thể gây đau, tê, châm chích, yếu hoặc mất chức năng ở vùng dây thần kinh bị ảnh hưởng chi phối, điều trị phụ thuộc xác định và xử lý nguyên nhân nền. Nguyên nhân thường gặp gồm nhiễm virus, bệnh tự miễn, đái tháo đường, thiếu vitamin, chèn ép dây thần kinh kéo dài hoặc phơi nhiễm một số độc tố, chẩn đoán thường gồm khám lâm sàng cùng đo dẫn truyền thần kinh hoặc điện cơ để đánh giá mức độ và dạng tổn thương, cùng xét nghiệm máu tìm nguyên nhân chuyển hóa hoặc tự miễn nền. Điều trị thường kết hợp thuốc giảm viêm và kiểm soát đau, điều chỉnh thiếu hụt hoặc mất cân bằng chuyển hóa nền, và với trường hợp tự miễn, các liệu pháp nhằm làm dịu đáp ứng miễn dịch. Vật lý trị liệu có thể được khuyến nghị để duy trì sức mạnh cơ và ngăn cứng khớp trong khi dây thần kinh hồi phục, vì quá trình lành có thể kéo dài vài tuần đến vài tháng tùy mức độ. Trong trường hợp do chèn ép liên tục, như một số dạng viêm dây thần kinh mặt hoặc thị giác, có thể cần can thiệp định hướng hơn. Các khoa thần kinh tại Ấn Độ cung cấp xét nghiệm chẩn đoán và theo dõi đa chuyên khoa cần thiết để quản lý viêm dây thần kinh từ giai đoạn sớm đến hồi phục.',
			},
			{
				name: 'Điều trị tâm thần phân liệt',
				description:
					'Tâm thần phân liệt là bệnh lý tâm thần mạn tính ảnh hưởng đến tư duy, nhận thức và hành vi, có thể bao gồm triệu chứng như ảo giác, hoang tưởng, tư duy rời rạc và khó khăn về động lực hay biểu lộ cảm xúc; điều trị thường là lâu dài, tập trung vào kết hợp thuốc và hỗ trợ tâm lý xã hội có cấu trúc thay vì một thủ thuật đơn lẻ. Thuốc chống loạn thần thường là nền tảng điều trị, giúp giảm cường độ ảo giác và hoang tưởng, loại thuốc và liều cụ thể được điều chỉnh theo thời gian dựa trên đáp ứng và tác dụng phụ. Cùng với thuốc, tâm lý trị liệu, giáo dục gia đình và chương trình phục hồi chức năng tâm lý xã hội giúp người bệnh quản lý triệu chứng, xây dựng kỹ năng sinh hoạt và xã hội, hướng tới chức năng ổn định ở nhà, trong các mối quan hệ và khi có thể trong công việc hoặc học tập. Một số bệnh nhân cần giai đoạn ổn định nội trú trong các đợt cấp, đặc biệt khi triệu chứng gây lo ngại về an toàn, sau đó chuyển sang chăm sóc ngoại trú và hỗ trợ cộng đồng. Vì tâm thần phân liệt ảnh hưởng mỗi người khác nhau và thường cần điều chỉnh điều trị theo thời gian, việc bác sĩ tâm thần am hiểu bệnh lý theo dõi liên tục rất quan trọng. Các trung tâm sức khỏe tâm thần tại Ấn Độ cung cấp đánh giá tâm thần có cấu trúc, quản lý thuốc và chương trình phục hồi chức năng được thực hiện với sự tinh tế mà bệnh lý này đòi hỏi.',
			},
			{
				name: 'Cấy máy bơm Baclofen',
				description:
					'Cấy máy bơm Baclofen là thiết bị được đặt bằng phẫu thuật để đưa thuốc giãn cơ baclofen trực tiếp vào dịch quanh tủy sống, gọi là khoang nội tủy, điều trị tình trạng co cứng nặng, một tình trạng cứng cơ quá mức và co giật không tự chủ có thể do bại não, chấn thương tủy sống, đa xơ cứng hoặc chấn thương não gây ra. Vì thuốc được đưa trực tiếp ở mức tủy sống thay vì qua đường máu, có thể đạt kiểm soát triệu chứng hiệu quả với liều thấp hơn nhiều so với baclofen đường uống, giảm buồn ngủ và các tác dụng phụ toàn thân khác thường hạn chế điều trị đường uống. Trước khi cấy vĩnh viễn, bệnh nhân thường trải qua liều thử baclofen qua tiêm tủy sống tạm thời để xác nhận phương pháp này cải thiện đáng kể tình trạng co cứng. Máy bơm vĩnh viễn, một bình chứa nhỏ có thể nạp lại với cơ chế phân phối có thể lập trình, được cấy dưới da bụng và kết nối với một ống thông mảnh luồn vào khoang nội tủy quanh tủy sống. Máy bơm cần nạp lại và điều chỉnh liều định kỳ tại các lần tái khám. Các trung tâm phục hồi chức năng và phẫu thuật thần kinh tại Ấn Độ cung cấp cả đánh giá thử nghiệm và thủ thuật cấy ghép cho bệnh nhân được chọn phù hợp.',
			},
			{
				name: 'Cấy máy bơm Morphine',
				description:
					'Cấy máy bơm Morphine, còn gọi là hệ thống phân phối thuốc nội tủy, là thiết bị được đặt bằng phẫu thuật để đưa liều nhỏ, liên tục morphine hoặc thuốc giảm đau opioid khác trực tiếp vào dịch quanh tủy sống, là lựa chọn cho bệnh nhân đau mạn tính nặng, đặc biệt do ung thư giai đoạn tiến triển, chưa được kiểm soát đầy đủ bằng thuốc giảm đau đường uống hoặc toàn thân khác. Đưa thuốc trực tiếp ở mức tủy sống cho phép giảm đau hiệu quả với liều nhỏ hơn nhiều so với đường uống, có thể giảm tác dụng phụ toàn thân như an thần và táo bón thường đi kèm liệu pháp opioid đường uống liều cao. Trước khi cấy vĩnh viễn, bệnh nhân thường trải qua giai đoạn thử nghiệm bằng ống thông tạm thời hoặc tiêm để xác nhận phương pháp phân phối này mang lại giảm đau đáng kể. Máy bơm cấy ghép, một bình chứa nhỏ với cơ chế bơm có thể lập trình, nằm dưới da bụng và kết nối với ống thông đặt trong khoang nội tủy. Máy cần nạp lại định kỳ qua thủ thuật kim đơn giản và điều chỉnh liều dựa trên mức độ đau liên tục của bệnh nhân. Các dịch vụ quản lý đau và phẫu thuật thần kinh liên kết ung bướu tại Ấn Độ cung cấp liệu pháp này như một phần chăm sóc giảm nhẹ và đau mạn tính toàn diện hơn.',
			},
			{
				name: 'Kích thích cổ cao',
				description:
					'Kích thích cổ cao là việc đặt bằng phẫu thuật một thiết bị kích thích tủy sống ở mức cao của cột sống cổ, gần nền sọ, để giúp quản lý một số tình trạng đau mạn tính ảnh hưởng đầu, cổ và chi trên chưa đáp ứng với điều trị bảo tồn hơn. Thủ thuật gồm đặt các dây điện cực mảnh vào khoang ngoài màng cứng gần tủy sống ở mức cổ cao này, kết nối với một máy phát xung cấy ghép nhỏ phát xung điện nhẹ để can thiệp vào truyền tín hiệu đau trước khi nó đến não. Thường được cân nhắc cho các tình trạng như đau dây thần kinh chẩm, một số dạng đau đầu mạn tính, và hội chứng đau vùng phức hợp hoặc đau thần kinh liên quan chi trên, sau khi các điều trị khác không giảm đau đầy đủ. Hầu hết bệnh nhân trải qua thử nghiệm tạm thời với dây điện cực ngoài trước, để cả bệnh nhân và bác sĩ đánh giá mức độ giảm đau mà kích thích mang lại trước khi cam kết cấy ghép vĩnh viễn. Nếu thử nghiệm thành công, hệ thống vĩnh viễn được cấy trong một thủ thuật tiếp theo. Các trung tâm quản lý đau tại Ấn Độ cung cấp cả giai đoạn thử nghiệm và kích thích vĩnh viễn cùng lập trình theo dõi mà liệu pháp này đòi hỏi.',
			},
		],
		benefits: [
			'Bác sĩ phẫu thuật thần kinh được đào tạo về kỹ thuật vi phẫu và xâm lấn tối thiểu',
			'MRI trong mổ và định vị thần kinh có sẵn tại các trung tâm hàng đầu',
			'Khoa ICU thần kinh chuyên biệt với theo dõi tình trạng nguy kịch liên tục',
			'Hỗ trợ phục hồi thần kinh bài bản sau can thiệp',
		],
		flagshipProcedure: 'Cắt bỏ khối u não',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '85–90%' },
			{ country: 'Vương quốc Anh', waitTime: '3–9 tháng (NHS)', successRate: '85–90%' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '84–89%' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '82–87%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '85%+' },
		],
		inclusions: [
			'Đánh giá thần kinh trước phẫu thuật, phân tích MRI/CT và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ phẫu thuật thần kinh và gây mê cho thủ thuật chính',
			'Chi phí phòng mổ, bao gồm định vị thần kinh khi phù hợp',
			'Thời gian nằm ICU thần kinh (4 ngày) cộng 8 ngày phòng hồi phục trung gian',
			'Chăm sóc y tế và theo dõi thần kinh tiêu chuẩn trong thời gian nằm viện',
			'Chi phí xét nghiệm và chẩn đoán hình ảnh liên quan đến thủ thuật',
			'Tóm tắt xuất viện với kế hoạch phục hồi thần kinh bài bản',
		],
		exclusions: [
			'Thời gian nằm viện trước khi nhập viện để ổn định bệnh nhân trước khi phê duyệt can thiệp',
			'Thời gian nằm viện hoặc ICU vượt quá thời hạn của gói dịch vụ',
			'Xạ trị hoặc hóa trị cho khối u ác tính, được báo giá riêng',
			'Các buổi phục hồi thần kinh ngoại trú sau khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật khối u não tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Cắt bỏ khối u não tại Ấn Độ bắt đầu từ 9.000 USD, thấp hơn khoảng 90% so với Mỹ, bao gồm đánh giá trước phẫu thuật, ca can thiệp, thời gian nằm ICU thần kinh và kế hoạch phục hồi bài bản.',
			},
			{
				question: 'Có các kỹ thuật phẫu thuật thần kinh xâm lấn tối thiểu không?',
				answer:
					'Có, nhiều bệnh viện đối tác của chúng tôi cung cấp phương pháp định vị hình ảnh và xâm lấn tối thiểu, bao gồm MRI trong mổ và định vị thần kinh, có thể cải thiện độ chính xác và giảm thời gian hồi phục cho các trường hợp đủ điều kiện.',
			},
			{
				question: 'Thời gian nằm viện cho phẫu thuật thần kinh là bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 12 ngày — 4 ngày ICU thần kinh và 8 ngày phòng hồi phục trung gian — với thời gian lưu trú tổng cộng khuyến nghị tại Ấn Độ khoảng 3–4 tuần để theo dõi.',
			},
			{
				question: 'Có cần xạ trị hoặc hóa trị sau can thiệp không?',
				answer:
					'Đối với khối u ác tính, đội ngũ thần kinh-ung bướu của bạn có thể đề xuất xạ trị hoặc hóa trị sau can thiệp — những phương pháp này được báo giá riêng, tùy theo phác đồ cụ thể của bạn, và được thảo luận như một phần của kế hoạch điều trị.',
			},
			{
				question: 'Tôi có thể xin ý kiến thứ hai trước khi đi không?',
				answer:
					'Có, hãy gửi phim chụp MRI/CT và báo cáo của bạn để được đánh giá chuyên môn miễn phí — hội đồng phẫu thuật thần kinh của chúng tôi sẽ xác nhận liệu can thiệp có được khuyến nghị hay không, trước khi bạn cam kết lên đường.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo thần kinh và hình ảnh chẩn đoán của bạn qua biểu mẫu liên hệ hoặc WhatsApp, điều phối viên sẽ sắp xếp đánh giá chuyên môn và ước tính minh bạch trong 48 giờ.',
			},
		],
	},

	'spine-surgery': {
		name: 'Phẫu thuật cột sống',
		shortDescription: 'Hàn cột sống, thay đĩa đệm và chỉnh vẹo cột sống, với các chương trình phục hồi bài bản.',
		overview:
			'Các trung tâm phẫu thuật cột sống tại Ấn Độ kết hợp bác sĩ phẫu thuật cột sống được đào tạo chuyên sâu với các kỹ thuật xâm lấn tối thiểu và bảo tồn vận động, giúp bệnh nhân bị đau lưng mãn tính, bệnh đĩa đệm và biến dạng cột sống tránh phải chờ đợi lâu như thường thấy ở phương Tây.',
		procedures: ['Hàn cột sống', 'Thay đĩa đệm', 'Chỉnh vẹo cột sống'],
		benefits: [
			'Bác sĩ phẫu thuật cột sống được đào tạo chuyên sâu, sử dụng kỹ thuật xâm lấn tối thiểu',
			'Tùy chọn thay đĩa đệm bảo tồn vận động, tại các trung tâm chọn lọc',
			'Vật lý trị liệu bài bản tại bệnh viện ngay từ ngày đầu',
			'Thời gian nằm viện điển hình 5–7 ngày cho phẫu thuật cột sống lớn',
		],
		flagshipProcedure: 'Hàn cột sống thắt lưng',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '88–92%' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '88–92%' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '87–91%' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '85–89%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '90%+' },
		],
		inclusions: [
			'Đánh giá cột sống trước phẫu thuật, bao gồm phân tích MRI/X-quang',
			'Chi phí bác sĩ phẫu thuật và gây mê cho thủ thuật cột sống',
			'Chi phí phòng mổ và vật liệu cấy ghép/dụng cụ cột sống tiêu chuẩn',
			'Thời gian nằm ICU (1 ngày) cộng 5 ngày phòng riêng',
			'Các buổi vật lý trị liệu bài bản tại bệnh viện',
			'Xét nghiệm, chẩn đoán hình ảnh và thuốc sau phẫu thuật tiêu chuẩn trong thời gian lưu trú',
			'Tóm tắt xuất viện kèm chương trình bài tập tại nhà và kế hoạch phục hồi',
		],
		exclusions: [
			'Vật liệu cấy ghép cột sống cao cấp hoặc theo yêu cầu riêng ngoài dụng cụ tiêu chuẩn',
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Hàn nhiều tầng đốt sống, vượt quá các tầng được báo giá trong đánh giá ban đầu',
			'Các buổi vật lý trị liệu ngoại trú sau khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Phẫu thuật chỉnh sửa do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Hàn cột sống tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói hàn cột sống thắt lưng tại Ấn Độ bắt đầu từ 6.500 USD, thấp hơn khoảng 90% so với mức giá thông thường tại Mỹ, bao gồm chi phí bác sĩ phẫu thuật, vật liệu cấy ghép, thời gian nằm viện và vật lý trị liệu tại bệnh viện.',
			},
			{
				question: 'Có phẫu thuật cột sống xâm lấn tối thiểu không?',
				answer:
					'Có, một số bệnh viện đối tác của chúng tôi cung cấp các kỹ thuật xâm lấn tối thiểu và bảo tồn vận động, như thay đĩa đệm, có thể giảm mất máu và rút ngắn thời gian hồi phục cho các ứng viên phù hợp.',
			},
			{
				question: 'Thời gian nằm viện và hồi phục kéo dài bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 6 ngày và nên ở lại Ấn Độ 2–3 tuần để đội ngũ cột sống có thể theo dõi quá trình hồi phục ban đầu trước khi về nước.',
			},
			{
				question: 'Loại vật liệu cấy ghép/dụng cụ nào được sử dụng?',
				answer:
					'Các bệnh viện đối tác của chúng tôi sử dụng tiêu chuẩn là hệ thống vật liệu cấy ghép cột sống được chứng nhận quốc tế, với nâng cấp dụng cụ cao cấp theo yêu cầu và báo giá riêng.',
			},
			{
				question: 'Tôi có cần vật lý trị liệu sau can thiệp không?',
				answer:
					'Có, vật lý trị liệu bài bản tại bệnh viện bắt đầu ngay sau ca can thiệp, và bác sĩ phẫu thuật sẽ cung cấp chương trình bài tập tại nhà để tiếp tục hồi phục sau khi bạn về nước.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Gửi phim MRI hoặc X-quang cột sống của bạn qua biểu mẫu liên hệ, bạn sẽ nhận được đánh giá chuyên môn và ước tính chi phí minh bạch trong 24 giờ.',
			},
		],
	},

	'bariatric-surgery': {
		name: 'Phẫu thuật giảm béo',
		shortDescription: 'Cắt dạ dày hình ống, bắc cầu dạ dày và bóng dạ dày để giảm cân bền vững dưới sự giám sát y tế.',
		overview:
			'Các trung tâm giảm béo tại Ấn Độ kết hợp kinh nghiệm phẫu thuật nội soi với tư vấn dinh dưỡng bài bản trước và sau phẫu thuật, giúp bệnh nhân đạt được mức giảm cân bền vững, với thời gian nằm viện ngắn hơn và hồi phục nhanh hơn so với phẫu thuật mở.',
		procedures: ['Cắt dạ dày hình ống', 'Bắc cầu dạ dày', 'Bóng dạ dày'],
		benefits: [
			'Phẫu thuật giảm béo nội soi (xâm lấn tối thiểu) là tiêu chuẩn',
			'Tư vấn dinh dưỡng và lối sống bài bản, trước và sau phẫu thuật',
			'Thời gian nằm viện điển hình chỉ 2–3 ngày cho cắt dạ dày hình ống',
			'Hỗ trợ theo dõi dài hạn để giám sát tiến trình giảm cân',
		],
		flagshipProcedure: 'Cắt dạ dày hình ống nội soi',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '3–6 tuần', successRate: '90–95%' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '90–95%' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '89–94%' },
			{ country: 'Thái Lan', waitTime: '1–3 tuần', successRate: '88–93%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '92%+' },
		],
		inclusions: [
			'Đánh giá trước phẫu thuật, bao gồm nội soi và kiểm tra sức khỏe tổng quát',
			'Tư vấn với chuyên gia dinh dưỡng và lập kế hoạch ăn uống trước phẫu thuật',
			'Chi phí bác sĩ phẫu thuật và gây mê cho thủ thuật nội soi',
			'Chi phí phòng mổ và dụng cụ khâu nối/vật tư phẫu thuật tiêu chuẩn',
			'3 ngày nằm viện, bao gồm theo dõi sau phẫu thuật',
			'Tóm tắt xuất viện kèm kế hoạch tiến triển chế độ ăn sau phẫu thuật bài bản',
		],
		exclusions: [
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Phẫu thuật chỉnh sửa cho thủ thuật giảm béo trước đây được thực hiện ở nơi khác',
			'Phẫu thuật tạo hình để loại bỏ da thừa sau khi giảm cân đáng kể',
			'Thực phẩm bổ sung dinh dưỡng dài hạn ngoài bộ ban đầu khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật cắt dạ dày hình ống tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói cắt dạ dày hình ống nội soi tại Ấn Độ bắt đầu từ 4.500 USD, thấp hơn khoảng 80% so với Mỹ, bao gồm đánh giá trước phẫu thuật, ca can thiệp, thời gian nằm viện và kế hoạch ăn uống sau phẫu thuật.',
			},
			{
				question: 'Tôi có đủ điều kiện phẫu thuật giảm béo không?',
				answer:
					'Điều kiện thường được xác định dựa trên BMI và các bệnh lý liên quan — hãy chia sẻ chiều cao, cân nặng và bất kỳ tình trạng bệnh nào hiện có qua biểu mẫu liên hệ để được đội ngũ giảm béo của chúng tôi đánh giá điều kiện miễn phí.',
			},
			{
				question: 'Tôi có thể giảm được bao nhiêu cân?',
				answer:
					'Hầu hết bệnh nhân giảm 60–70% lượng cân dư sau 12–18 tháng kể từ khi cắt dạ dày hình ống hoặc bắc cầu, mặc dù kết quả thay đổi tùy theo thủ thuật được chọn và mức độ tuân thủ chế độ ăn và lối sống sau phẫu thuật.',
			},
			{
				question: 'Thời gian nằm viện và hồi phục kéo dài bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 3 ngày và nên ở lại Ấn Độ 10–14 ngày để đội ngũ phẫu thuật có thể xác nhận quá trình hồi phục ban đầu trước khi về nước.',
			},
			{
				question: 'Thủ thuật có được thực hiện bằng nội soi không?',
				answer:
					'Có, cắt dạ dày hình ống, bắc cầu dạ dày và đặt bóng dạ dày đều được thực hiện bằng nội soi như tiêu chuẩn, thường có nghĩa là ít đau hơn và hồi phục nhanh hơn so với phẫu thuật mở.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ chiều cao, cân nặng và tiền sử bệnh của bạn qua biểu mẫu liên hệ, điều phối viên giảm béo của chúng tôi sẽ sắp xếp đánh giá chuyên môn trong 24 giờ.',
			},
		],
	},

	'nephrology-urology': {
		name: 'Thận học và tiết niệu',
		shortDescription: 'Điều trị sỏi thận, phẫu thuật tuyến tiền liệt và chăm sóc lọc máu bởi các đội ngũ tiết niệu chuyên khoa.',
		overview:
			'Các trung tâm tiết niệu và thận học tại Ấn Độ thực hiện các thủ thuật sỏi thận và tuyến tiền liệt với khối lượng lớn, sử dụng kỹ thuật laser và xâm lấn tối thiểu, mang đến cho bệnh nhân quốc tế cơ hội tiếp cận nhanh chóng với chuyên gia, không cần chờ đợi như thường thấy ở các nước khác.',
		procedures: ['Loại bỏ sỏi thận', 'Phẫu thuật tuyến tiền liệt', 'Chăm sóc lọc máu'],
		benefits: [
			'Loại bỏ sỏi thận bằng laser và xâm lấn tối thiểu (PCNL/RIRS)',
			'Phẫu thuật tuyến tiền liệt bằng robot và nội soi có sẵn tại các trung tâm hàng đầu',
			'Đơn vị lọc máu chuyên biệt cho bệnh nhân cần chăm sóc thận liên tục',
			'Xuất viện trong ngày hoặc ngày hôm sau cho nhiều thủ thuật xâm lấn tối thiểu',
		],
		flagshipProcedure: 'Lấy sỏi thận qua da (PCNL)',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '3–6 tuần', successRate: '92–96%' },
			{ country: 'Vương quốc Anh', waitTime: '3–9 tháng (NHS)', successRate: '92–96%' },
			{ country: 'Đức', waitTime: '3–6 tuần', successRate: '91–95%' },
			{ country: 'Thái Lan', waitTime: '1–3 tuần', successRate: '90–94%' },
			{ country: 'Ấn Độ', waitTime: '3–7 ngày', successRate: '94%+' },
		],
		inclusions: [
			'Đánh giá trước phẫu thuật, bao gồm siêu âm/CT và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ tiết niệu và gây mê cho thủ thuật',
			'Chi phí phòng mổ và thiết bị laser/nội soi',
			'2 ngày nằm viện, bao gồm theo dõi sau phẫu thuật',
			'Thuốc và vật tư tiêu chuẩn trong thời gian lưu trú',
			'Tóm tắt xuất viện kèm kế hoạch chẩn đoán hình ảnh theo dõi',
		],
		exclusions: [
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Điều trị sỏi hai bên (cả hai thận), nếu không được báo giá cùng nhau',
			'Các buổi lọc máu dài hạn ngoài thời gian lưu trú đánh giá ban đầu',
			'Thuốc mang về nhà ngoài bộ thuốc xuất viện tiêu chuẩn',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Loại bỏ sỏi thận tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói PCNL (loại bỏ sỏi thận) tại Ấn Độ bắt đầu từ 3.500 USD, thấp hơn khoảng 85% so với Mỹ, bao gồm đánh giá trước phẫu thuật, thủ thuật, thời gian nằm viện và chẩn đoán hình ảnh theo dõi.',
			},
			{
				question: 'Điều trị sỏi thận có xâm lấn tối thiểu không?',
				answer:
					'Có, hầu hết sỏi được điều trị bằng kỹ thuật laser xâm lấn tối thiểu, như PCNL hoặc RIRS, thường cho phép xuất viện trong 1–2 ngày, tùy theo kích thước và vị trí của sỏi.',
			},
			{
				question: 'Có phẫu thuật tuyến tiền liệt bằng robot không?',
				answer:
					'Có, một số bệnh viện đối tác của chúng tôi cung cấp phẫu thuật tuyến tiền liệt bằng robot và nội soi, có thể giảm mất máu và rút ngắn thời gian hồi phục so với phẫu thuật mở.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết các thủ thuật tiết niệu cần khoảng 7–10 ngày tại Ấn Độ cho đánh giá trước phẫu thuật, thủ thuật và một buổi tái khám trước khi về nước; các trường hợp phức tạp có thể cần thời gian lưu trú dài hơn.',
			},
			{
				question: 'Bạn có hỗ trợ bệnh nhân cần lọc máu liên tục không?',
				answer:
					'Có, các bệnh viện đối tác của chúng tôi có đơn vị lọc máu chuyên biệt và có thể điều phối chăm sóc thận liên tục cho bệnh nhân đi đánh giá hoặc đang chờ ghép thận.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo chẩn đoán hình ảnh (siêu âm/CT) của bạn qua biểu mẫu liên hệ, điều phối viên tiết niệu của chúng tôi sẽ sắp xếp đánh giá chuyên môn và báo giá minh bạch trong 24 giờ.',
			},
		],
	},
};

export const getViTreatment = (slug: string) => viTreatments[slug];

// Translations saved in the content editor (/editor/) take priority.
for (const [slug, tr] of Object.entries(cmsTranslations('treatments', 'vi'))) {
	viTreatments[slug] = { ...viTreatments[slug], ...tr } as TreatmentDataVi;
}
