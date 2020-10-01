package jp.co.sample;

import jp.co.sample.common.BaseEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MapInfoEntity extends BaseEntity{

	/**
	 * 社員ＩＤ
	 */
	private String map_no;

	/**
	 * 社員名前
	 */
	private String pop_width;

	/**
	 * パスワード
	 */
	private String pop_height;

	/**
	 * 権限
	 */
	private String memo;

	public MapInfoEntity() {
		super("mapInfo", "");
		// TODO 自動生成されたコンストラクター・スタブ
	}

}
